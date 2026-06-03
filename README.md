# NestJS CMS

A headless CMS built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/). This system handles user authentication, post management with scheduling capabilities, and a webhook dispatch system.

## Features

- **Authentication:** JWT-based login and signup using Passport. Passwords are securely hashed with bcrypt.
- **User Management:** User creation and retrieval with roles (`ADMIN`, `EDITOR`).
- **Post Management:** Full CRUD for articles/posts. Supports drafted, published, and scheduled posts.
- **Scheduler:** A background cron job that runs every minute to automatically publish scheduled posts that have reached their `publishedAt` time.
- **Webhooks:** Register webhook URLs to receive HTTP ping notifications when a post's status changes to `PUBLISHED`.

## Tech Stack

- **Framework:** NestJS
- **ORM:** Prisma (SQLite for local development)
- **Security:** Passport.js, JWT, bcrypt
- **Task Scheduling:** `@nestjs/schedule`

## Prerequisites

- Node.js (v16+)
- npm

## Installation

1. **Clone the repository** (if applicable)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Database Setup:**
   Generate the Prisma client and run migrations to create the local SQLite database (`dev.db`).
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

## Running the App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

By default, the application runs on **http://localhost:3000**.

## API Endpoints

### Auth
- `POST /auth/signup` - Register a new user.
  - Body: `{ "email": "user@example.com", "password": "password123", "name": "John Doe", "role": "EDITOR" }`
- `POST /auth/login` - Authenticate and receive a JWT access token.
  - Body: `{ "email": "user@example.com", "password": "password123" }`

### Posts (Requires JWT Bearer Token)
- `GET /posts` - Retrieve all posts. (Public)
- `GET /posts/:id` - Retrieve a specific post by ID. (Public)
- `POST /posts` - Create a new post. (Protected)
  - Body: `{ "title": "My Post", "slug": "my-post", "content": "Hello World", "status": "DRAFT" }`
- `PATCH /posts/:id` - Update an existing post. (Protected)
- `DELETE /posts/:id` - Delete a post. (Protected)

### Webhooks (Requires JWT Bearer Token)
- `GET /webhooks` - List all registered webhooks.
- `POST /webhooks` - Register a new webhook.
  - Body: `{ "name": "My Webhook", "url": "https://example.com/webhook" }`

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
