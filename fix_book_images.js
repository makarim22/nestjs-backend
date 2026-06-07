const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const adapter = new PrismaLibSql({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function fixImages() {
  const books = await prisma.bookReview.findMany({
    where: {
      coverUrl: {
        contains: 'placehold.co' // Only fix ones with placeholders
      }
    }
  });
  console.log(`Found ${books.length} books with placeholder covers to fix...`);
  
  for (const book of books) {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&limit=3`);
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
            console.log(`[FIXED] ${book.title} -> ${coverUrl}`);
            foundCover = true;
            break;
          }
        }
      }
      
      if (!foundCover) {
        console.log(`[NOT FOUND] ${book.title}`);
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
