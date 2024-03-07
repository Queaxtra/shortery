require('dotenv').config();
const express = require('express');
const router = express.Router();
const { MongoProvider } = require("ervel.db");
const db = new MongoProvider(process.env.MONGO_URL);
const { RateLimiterMemory } = require('rate-limiter-flexible');

const opts = {
  points: 10,
  duration: 600,
};
const rateLimiter = new RateLimiterMemory(opts);

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

router.post('/:url', async (req, res) => {
    const url = `https://${req.params.url}`;
    const code = generateRandomString(6);
    if (!url) {
        res.status(400).json({ error: 'URL is required' });
    } else {
        try {
            await rateLimiter.consume(req.ip, 1);
            db.set(`urls_${code}`, url);
            res.json({ code: code });
        } catch (rejRes) {
            res.status(429).json({ error: 'Too Many Requests' });
        }
    }
});

router.post('/:url/:code', async (req, res) => {
    const url = `https://${req.params.url}`;
    const code = req.params.code;
    const existingUrl = await db.get(`urls_${code}`);
    if (existingUrl) {
        res.status(400).json({ error: 'This code is already in use' });
    } else {
        if (!url) {
            res.status(400).json({ error: 'URL is required' });
        } else {
            try {
                await rateLimiter.consume(req.ip, 1);
                db.set(`urls_${code}`, url);
                res.json({ code: code });
            } catch (rejRes) {
                res.status(429).json({ error: 'Too Many Requests' });
            }
        }
    }
});

module.exports = router;