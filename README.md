# Beacon API

A simple Express.js API that provides health checks and article endpoints.

## Installation


npm install


## Environment Variables

Create a `.env` file:


PORT=3000
NODE_ENV=development


## Run the Server


node server.js


The server will start on:


http://localhost:3000


## API Endpoints

### GET /

Verify that the application is running.

**Request**


GET /


**Response**


{
  "service": "beacon",
  "status": "running"
}




### GET /health

Health check endpoint.

**Request**


GET /health


**Response**


{
  "status": "healthy",
  "uptime": 123.45,
  "timestamp": "2026-06-03T10:00:00.000Z"
}




### GET /articles

Retrieve all available articles.

**Request**


GET /articles

**Response**


[
  {
    "id": 1,
    "title": "First article",
    "source": "AI News",
    "url": "https://www.artificialintelligence-news.com/article-1"
  },
  {
    "id": 2,
    "title": "Second article",
    "source": "Accident News",
    "url": "https://www.ndtv.com/topic/accidents-in-india/article-2"
  }
]




### GET /articles/:id

Retrieve a specific article by ID.

**Request**


GET /articles/1


**Response**


{
  "id": 1,
  "title": "First article",
  "source": "AI News",
  "url": "https://www.artificialintelligence-news.com/article-1"
}


### Article Not Found

**Request**


GET /articles/999


**Response**

{
  "error": "Article not found"
}


**Status Code**


404 Not Found

