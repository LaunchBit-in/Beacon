# Beacon Week 2 Technical Requirements Document

## Objective

Build and deploy the first version of Beacon.

Beacon must collect articles from RSS feeds, store article records in PostgreSQL, prevent duplicate entries, and expose article data through REST APIs.

## Technology Stack

- Linux / Terminal
- Node.js
- Express
- PostgreSQL
- Docker
- Git & GitHub

## Functional Requirements

### Backend Service

- Implement a Node.js backend service using Express.
- Use Express Router for route organization.
- Add request logging middleware.
- Read configuration from environment variables.
- Provide health and article retrieval APIs.

### RSS Ingestion

- Parse configured RSS feeds.
- Extract article metadata from each RSS item.
- Store parsed articles in PostgreSQL.
- Prevent duplicate article records.

### Article Storage

- Use PostgreSQL as the persistent data store.
- Create an `articles` table.
- Store enough metadata to support article retrieval, filtering, and duplicate detection.
- Enforce duplicate prevention at the database or application layer.

### Article APIs

- Expose endpoints for retrieving all articles.
- Expose an endpoint for retrieving a specific article by ID.
- Add pagination support.
- Add filtering support.

### Docker Runtime

- Dockerize the Node.js application.
- Dockerize or configure PostgreSQL for local containerized execution.
- Provide a Docker-based startup flow that can run the project from a clean checkout.

### Deployment

- Deploy the application to a publicly accessible Linux server.
- Validate the deployed service using the documented API endpoints.

## Environment Variables

The service must support the following environment variables:

- `PORT`
- `NODE_ENV`

Create both:

- `.env`
- `.env.example`

Additional database and RSS configuration variables may be added as needed.

## API Requirements

### `GET /`

Purpose: Verify that the application is running.

Expected response:

```json
{
  "service": "beacon",
  "status": "running"
}
```

### `GET /health`

Purpose: Health check endpoint for monitoring and deployment validation.

Expected response:

```json
{
  "status": "healthy",
  "uptime": 1234,
  "timestamp": "2026-06-01T12:00:00Z"
}
```

Response fields:

- `status`: service health state
- `uptime`: application uptime in seconds
- `timestamp`: current server timestamp

### `GET /articles`

Purpose: Retrieve available articles.

Initial implementation may return a hardcoded in-memory array. Final Week 2 implementation must return articles from PostgreSQL.

Expected initial response:

```json
[
  {
    "id": 1,
    "title": "Example Article",
    "source": "Hacker News",
    "url": "https://example.com/article"
  }
]
```

Final implementation must support pagination and filtering.

### `GET /articles/:id`

Purpose: Retrieve a specific article by ID.

Example request:

```http
GET /articles/1
```

Expected response:

```json
{
  "id": 1,
  "title": "Example Article",
  "source": "Hacker News",
  "url": "https://example.com/article"
}
```

If the article does not exist, return HTTP status code `404`.

Expected error response:

```json
{
  "error": "Article not found"
}
```

## Implementation Milestones

### Day 1

- Clone the repository.
- Set up the Node.js project.
- Create the Express server.
- Add the root application endpoint.

### Day 2

- Implement `GET /`.
- Implement `GET /health`.
- Implement `GET /articles` using an in-memory array.
- Implement `GET /articles/:id` using an in-memory array.
- Add Express Router.
- Add request logging middleware.
- Add `.env` and `.env.example`.
- Add API examples to the README.

### Day 3

- Set up PostgreSQL.
- Design and create the `articles` table.
- Validate the schema with SQL queries.

### Day 4

- Parse RSS feeds.
- Store parsed articles in PostgreSQL.
- Handle duplicate article records.

### Day 5

- Replace in-memory article APIs with database-backed APIs.
- Add pagination.
- Add filtering.

### Day 6

- Dockerize the application.
- Configure PostgreSQL for Docker-based local execution.
- Verify the project can run from a clean checkout using Docker.

### Day 7

- Deploy the application to a Linux server.
- Validate the deployed service using the expected API endpoints.

## Git Workflow Requirements

- Use feature branches for all work.
- Open pull requests for review.
- Do not commit directly to `main`.

Each pull request must include:

- What changed
- Why it changed
- How it was tested

## Documentation Requirements

- README must include setup instructions.
- README must include environment variable usage.
- README must include API examples.
- Deployment steps must be documented once deployment is complete.

## Acceptance Criteria

By the end of Day 2:

- A developer can clone the repository.
- A developer can install dependencies.
- A developer can start the application.
- All four initial endpoints can be called through a browser, Postman, or `curl`.

By the end of Week 2:

- RSS articles are fetched.
- Articles are stored in PostgreSQL.
- Duplicate articles are prevented.
- Article APIs return persisted data.
- Article APIs support pagination and filtering.
- The application and database can run through Docker.
- The application is deployed to a publicly accessible Linux server.
