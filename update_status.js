process.env.DATABASE_URL = 'file:./dev.db';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  await prisma.movieReview.updateMany({ data: { status: 'APPROVED' } });
  await prisma.bookReview.updateMany({ data: { status: 'APPROVED' } });
  console.log('Updated all to APPROVED');
}

run();
