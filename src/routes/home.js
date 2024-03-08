const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const jsonResponse = {
        "message": "Welcome to the URL Shortener API.",
        "endpoints": {
            "create random code": "/:url",
            "create custom code": "/:url/:code",
            "view": "/:code"
        },
        "rateLimit": {
            "request": 10,
            "duration": 600
        }
    }

    const formattedResponse = JSON.stringify(jsonResponse, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(formattedResponse);
});

module.exports = router;
