const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

async function fix() {
  const movie = await prisma.movieReview.findFirst({
    where: { title: { contains: "Jeanne Dielman" } }
  });
  
  if (movie) {
    const res = await fetch('https://api.themoviedb.org/3/search/movie?query=Jeanne+Dielman&api_key=9e6d3b0656de6ebc44da8d9e2bea62f7');
    const data = await res.json();
    if (data.results && data.results.length > 0 && data.results[0].poster_path) {
      const posterUrl = 'https://image.tmdb.org/t/p/w500' + data.results[0].poster_path;
      await prisma.movieReview.update({
        where: { id: movie.id },
        data: { posterUrl }
      });
      console.log(`Updated Jeanne Dielman: ${posterUrl}`);
    } else {
      console.log("Still not found in TMDB");
    }
  } else {
    console.log("Movie not found in DB");
  }
}

fix().catch(console.error).finally(() => prisma.$disconnect());
