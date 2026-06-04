# Beacon

A production-ready content intelligence platform that ingests, processes, indexes, and analyzes web content using distributed workers, PostgreSQL, Redis, vector search, and LLM-powered retrieval.

This branch contains the first Express.js API implementation for Beacon, including health checks and article endpoints.

## Installation

```sh
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=3000
NODE_ENV=development
```

## Run the Server

```sh
node server.js
```

The server will start on:

```text
http://localhost:3000
```

## API Endpoints

### `GET /`

Verify that the application is running.

Request:

```http
GET /
```

Response:

```json
{
  "service": "beacon",
  "status": "running"
}
```

### `GET /health`

Health check endpoint.

Request:

```http
GET /health
```

Response:

```json
{
  "status": "healthy",
  "uptime": 123.45,
  "timestamp": "2026-06-03T10:00:00.000Z"
}
```

### `GET /articles`

Retrieve all available articles.

Request:

```http
GET /articles
```

Response:

```json
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
```

### `GET /articles/:id`

Retrieve a specific article by ID.

Request:

```http
GET /articles/1
```

Response:

```json
{
  "id": 1,
  "title": "First article",
  "source": "AI News",
  "url": "https://www.artificialintelligence-news.com/article-1"
}
```

### Article Not Found

Request:

```http
GET /articles/999
```

Response:

```json
{
  "error": "Article not found"
}
```

Status code:

```text
404 Not Found
```
