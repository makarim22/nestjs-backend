const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');
const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

async function check() {
  const count = await prisma.movieReview.count();
  console.log('TOTAL MOVIES IN DB:', count);
  
  const come = await prisma.movieReview.findFirst({ where: { title: "Come and See" }});
  if (come && come.posterUrl.includes("placehold")) {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?query=Come+and+See&api_key=9e6d3b0656de6ebc44da8d9e2bea62f7');
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const url = 'https://image.tmdb.org/t/p/w500' + data.results[0].poster_path;
      await prisma.movieReview.update({ where: { id: come.id }, data: { posterUrl: url } });
      console.log('Fixed Come and See poster:', url);
    }
  }
}

check().catch(console.error).finally(() => prisma.$disconnect());
