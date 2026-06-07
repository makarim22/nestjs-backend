const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const adapter = new PrismaLibSql({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function fixImages() {
  // Fetch ALL books to correct the potentially wrong ones we just set
  const books = await prisma.bookReview.findMany();
  console.log(`Found ${books.length} books to fix with improved search...`);
  
  for (const book of books) {
    try {
      // Include BOTH title and author, and sort by editions to get the most popular/correct match
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&sort=editions&limit=5`;
      const res = await fetch(url);
      const data = await res.json();
      
      let foundCover = false;
      if (data.docs && data.docs.length > 0) {
        for (const doc of data.docs) {
          if (doc.cover_i) {
            const coverUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
            await prisma.bookReview.update({
              where: { id: book.id },
              data: { coverUrl }
            });
            console.log(`[FIXED] ${book.title} by ${book.author} -> ${coverUrl}`);
            foundCover = true;
            break;
          }
        }
      }
      
      if (!foundCover) {
        // Fallback to placeholder if still not found
        console.log(`[NOT FOUND] ${book.title} by ${book.author}`);
        await prisma.bookReview.update({
          where: { id: book.id },
          data: { coverUrl: `https://placehold.co/400x600/1a1a2e/ffffff/png?text=${encodeURIComponent(book.title)}` }
        });
      }
    } catch (e) {
      console.log(`[ERROR] ${book.title}: ${e.message}`);
    }
    // sleep to prevent rate limiting from openlibrary
    await new Promise(r => setTimeout(r, 1000));
  }
  
  console.log('Done fixing book images!');
}

fixImages()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
