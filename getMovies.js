const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');
const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

async function main() {
  const movies = await prisma.movieReview.findMany({ select: { title: true } });
  console.log(movies.map(m => m.title).join('\n'));
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
