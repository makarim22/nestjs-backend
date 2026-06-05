import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

async function main() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    console.error('❌ Error: Please provide TURSO_DATABASE_URL and TURSO_AUTH_TOKEN environment variables.');
    console.error('Example: set TURSO_DATABASE_URL=libsql://... && set TURSO_AUTH_TOKEN=... && npx ts-node fix-turso.ts');
    process.exit(1);
  }

  const adapter = new PrismaLibSql({
    url,
    authToken,
  });
  const prisma = new PrismaClient({ adapter });

  try {
    console.log('Running status updates on remote database...');
    
    const movieRes = await prisma.movieReview.updateMany({
      data: { status: 'APPROVED' }
    });
    console.log(`✅ Approved ${movieRes.count} movie reviews.`);

    const bookRes = await prisma.bookReview.updateMany({
      data: { status: 'APPROVED' }
    });
    console.log(`✅ Approved ${bookRes.count} book reviews.`);

    console.log('🎉 Turso database successfully healed!');
  } catch (error) {
    console.error('❌ Failed to update Turso database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
