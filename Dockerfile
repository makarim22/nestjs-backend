# Stage 1: Build the NestJS application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and prisma schema
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client and build NestJS app
RUN npx prisma generate
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy package files and install ONLY production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy Prisma schema and generated client from builder
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy built application from builder
COPY --from=builder /app/dist ./dist

# Create directory for SQLite database (if used in production)
RUN mkdir -p /app/prisma/data

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the API port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
