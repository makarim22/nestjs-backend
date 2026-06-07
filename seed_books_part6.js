const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Hobbit",
    theGood: "A beautifully whimsical, perfectly paced adventure that established the modern fantasy genre.",
    theBad: "The narrative voice can occasionally feel overly paternalistic and targeted strictly toward young children.",
    review: "J.R.R. Tolkien’s The Hobbit is the foundational text of modern high fantasy, a surprisingly lighthearted prequel to the monumental Lord of the Rings. It follows Bilbo Baggins, a respectable, deeply unadventurous hobbit who is strong-armed by the wizard Gandalf into joining thirteen dwarves on a quest to reclaim the Lonely Mountain and its massive treasure from the dragon Smaug.\n\nThe novel is structured episodically, with Bilbo relying on his wits and a newly discovered magic ring to navigate trolls, goblins, giant spiders, and wood elves. The undeniable highlight of the book is the 'Riddles in the Dark' chapter, where Bilbo engages in a deadly game of wits with the miserable, corrupted creature Gollum. Unlike the epic tragedy of its successor, The Hobbit is fundamentally a story about discovering courage you didn't know you had. It is charming, beautifully written, and absolutely essential reading."
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publishYear: 1997,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Harry+Potter",
    theGood: "An unparalleled cultural phenomenon. The world-building of Hogwarts is incredibly immersive and instantly magical.",
    theBad: "The prose is highly functional but unexceptional, and the mystery plot relies heavily on massive coincidences.",
    review: "J.K. Rowling’s debut novel sparked a global reading phenomenon not seen before or since. The story of an abused orphan who discovers he is a famous wizard and is whisked away to the Hogwarts School of Witchcraft and Wizardry operates as the ultimate childhood wish fulfillment. \n\nThe strength of the novel lies entirely in its incredible world-building. Diagon Alley, the sorting hat, Quidditch, and the shifting staircases of Hogwarts feel instantly iconic and deeply lived-in. While the central mystery surrounding the Sorcerer's Stone is relatively simple and the characterization occasionally borders on caricature, the core friendship between Harry, Ron, and Hermione provides a strong emotional anchor. It is a brilliant, highly accessible introduction to fantasy that defined a generation."
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    publishYear: 2001,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Life+of+Pi",
    theGood: "A gorgeously written, fiercely original survival story that seamlessly weaves theology, zoology, and profound tragedy.",
    theBad: "The lengthy prologue exploring Pi's religious awakening can feel slow compared to the gripping shipwreck narrative.",
    review: "Yann Martel’s Life of Pi is a novel that brazenly promises 'to make you believe in God.' It tells the story of Piscine 'Pi' Patel, a deeply religious Indian teenager who survives a catastrophic shipwreck in the Pacific Ocean, only to find himself stranded on a lifeboat with a massive, terrifying Bengal tiger named Richard Parker.\n\nThe majority of the novel is a brilliant, terrifyingly pragmatic survival manual. Pi must establish dominance over the tiger, catch fish, and ward off dehydration while slowly losing his mind to exposure. The prose is beautiful and deeply observational. However, the novel's true brilliance is revealed in its final, devastating twist during Pi's interrogation by maritime officials. By offering two entirely different versions of his survival, the novel brilliantly forces the reader to confront the nature of truth, storytelling, and the absolute necessity of belief in the face of unbearable trauma."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books chunk 6 (3 books)...');
  let added = 0;
  for (const book of books) {
    const exists = await prisma.bookReview.findFirst({ where: { title: book.title } });
    if (!exists) {
      await prisma.bookReview.create({
        data: {
          ...book,
          status: 'APPROVED',
          authorId: admin.id
        }
      });
      added++;
      console.log(`+ Added: ${book.title}`);
    } else {
      console.log(`- Skipped (Exists): ${book.title}`);
    }
    // Stop if we hit exactly the required amount (if needed). We just need 2 books.
    if (added === 2) {
      console.log('Reached target of 2 books to complete 50.');
      break;
    }
  }
  console.log(`Done. Added ${added} books.`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());
