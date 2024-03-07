# 📖 API Documentation

This documentation explains the usage and functionality of the URL Shortener API.

## 📦 Installation

To use this API, you need to first add the `ervel.db`, `rate-limiter-flexible`, `express`, `body-parser`, `cors` and `dotenv` packages to your project.

In addition, you should create a file named `.env` in the root directory of your project. In this file, you should define your MongoDB database connection URL. For example:

```
MONGO_URL=
```

After completing these steps, you can start using the API. For more information on how to use the API, please refer to the detailed documentation of the relevant endpoints.

## 🏠 Home Page

The home page contains general information and usage of the API. This page provides information on how to use the API, what endpoints are available, and the rate limiting policies.

Example Usage:
```
GET /
```

## 🏗️ URL Creation

This endpoint is used to shorten a given URL. The user can make a POST request to shorten a URL. This endpoint can also be used to set a custom URL code.

Example Usage:
```
POST /create/:url
```

## 🔗 URL Viewing

This endpoint is used to view the original URL using a given URL code. The user can make a GET request to redirect a shortened URL to the original URL.

Example Usage:
```
GET /:code
```

## 🕵️‍♂️ Rate Limit

The API limits requests from the same IP address. By default, each IP address can make 10 requests in 10 minutes. This rate limiting policy helps prevent excessive requests.

Example Usage:
```
GET /rateLimit
```

## 📝 Example Usage

Below are a few scenarios that demonstrate the example usage of the API.

1. The user wants to shorten the URL "https://www.google.com". In this case, the user can make a "POST /create/https://www.google.com" request to get a URL code.
2. The user wants to shorten the URL "https://www.google.com" with a custom URL code "google". In this case, the user can make a "POST /create/https://www.google.com/google" request to get a URL code "google".
3. The user wants to view the original URL using the URL code "google". In this case, the user can make a "GET /google" request to view the original URL.

This documentation explains the basic usage and functionality of the API. For more information, please refer to the detailed documentation of the relevant endpoints.