require('dotenv').config();
const express = require('express');
const router = express.Router();
const { MongoProvider } = require("ervel.db");
const db = new MongoProvider(process.env.MONGO_URL);

router.get('/:code', async (req, res) => {
    const url = await db.get(`urls_${req.params.code}`);
    if (url) {
        res.redirect(url);
    } else {
        res.status(404).json({ error: 'URL not found' });
    }
});

module.exports = router;