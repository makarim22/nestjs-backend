# ⚙️ My Media Log - Backend API

A secure, high-performance REST API built with NestJS to serve as the headless backend for the Media Log application.

## ✨ Features

- **Media Management:** Complete CRUD endpoints for tracking Movies and Books.
- **Secure Authentication:** Passport-powered JWT authentication to protect administrative routes (POST, PATCH, DELETE).
- **Password Hashing:** Secure BCrypt salting and hashing for user credentials.
- **Local File Uploads:** Integrated Multer configuration to handle cover art and movie poster image uploads locally.
- **Static Asset Serving:** Automatically serves uploaded images directly to the frontend.
- **Relational Database:** Powered by Prisma ORM and SQLite for a lightweight, deeply relational data structure.

## 🛠️ Tech Stack

- **Framework:** NestJS
- **ORM:** Prisma
- **Database:** SQLite (Serverless and managed by Prisma, no manual installation required! Data is stored locally in `dev.db`)
- **Authentication:** `@nestjs/jwt`, `passport`, `bcrypt`
- **File Storage:** `@nestjs/platform-express` (Multer)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
*(Note: You do **not** need to install SQLite on your system. Prisma handles the database engine internally!)*

### Installation

1. Clone the repository and navigate into the backend directory:
   ```bash
   cd nestjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate the Prisma Client and run migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Seed the database with the initial Admin user:
   ```bash
   npm run seed
   ```

5. Start the development server:
   ```bash
   npm run start:dev
   ```

The API will now be running at `http://localhost:3000`. 
Static uploads will be accessible at `http://localhost:3000/uploads/`.

## 🗄️ Database Management
You can easily view and manage your data visually using Prisma Studio:
```bash
npx prisma studio
```
This will open a web-based database browser at `http://localhost:5555`.

## 📜 API Contract
A full OpenAPI specification is available in the `api-contract.yaml` file located in the root of the project.

## 📄 License
This project is open-source and available under the MIT License.
