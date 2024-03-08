const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const jsonResponse = {
        "message": "Welcome to the URL Shortener API. Create a new short URL by making a POST request to /create/:url. View a short URL by making a GET request to /:code.",
        "endpoints": {
            "Create Random Code": "/:url",
            "Create Custom Code": "/:url/:code",
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
