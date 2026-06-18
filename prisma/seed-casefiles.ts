import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const url = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

const adapter = new PrismaLibSql({
  url,
  ...(authToken ? { authToken } : {}),
});
const prisma = new PrismaClient({ adapter });

async function main() {
  let user = await prisma.user.findFirst();
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: 'agent@example.com',
        name: 'Field Agent 1',
        role: 'EDITOR',
      }
    });
  }

  // Case Files (Posts)
  const post1 = await prisma.post.upsert({
    where: { slug: 'investigating-kubrick' },
    update: {},
    create: {
      title: 'Investigating Stanley Kubrick',
      slug: 'investigating-kubrick',
      content: 'Stanley Kubrick’s films are less a traditional narrative than a pure, overwhelming sensory experience. From 2001: A Space Odyssey to The Shining, his work attempts to map the entire trajectory of human evolution and the terrifying reality of human isolation.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      authorId: user.id,
    }
  });

  const post2 = await prisma.post.upsert({
    where: { slug: 'the-noir-aesthetic' },
    update: {},
    create: {
      title: 'The Noir Aesthetic: From Chinatown to Blade Runner',
      slug: 'the-noir-aesthetic',
      content: 'Noir is not just a visual style; it is a worldview. It is a cinematic language of moral ambiguity, where the line between hero and villain is blurred by shadows and rain. This essay explores the evolution of noir from its classic roots to modern cyberpunk iterations.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      authorId: user.id,
    }
  });

  const post3 = await prisma.post.upsert({
    where: { slug: 'a-study-of-ghibli' },
    update: {},
    create: {
      title: 'A Study of Ghibli: Magic and Reality',
      slug: 'a-study-of-ghibli',
      content: 'Studio Ghibli films exist in a unique space between impossible fantasy and deeply grounded realism. Hayao Miyazaki crafts coming-of-age stories wrapped in the logic of a dream, where the magical and the mundane coexist seamlessly.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      authorId: user.id,
    }
  });

  console.log("Created Case Files:", post1.title, post2.title, post3.title);

  // Review
  const review = await prisma.movieReview.create({
    data: {
      title: 'Dune: Part Two',
      director: 'Denis Villeneuve',
      releaseYear: 2024,
      rating: 9,
      watchDate: new Date(),
      posterUrl: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGqqUT1O.jpg',
      theGood: 'A visual masterpiece that captures the epic scale of the novel perfectly.',
      theBad: 'Can feel overwhelmingly dense for non-fans of the book.',
      review: 'Denis Villeneuve returns to Arrakis with a sequel that somehow surpasses the massive scope of the first film. Dune: Part Two is a cinematic triumph, blending stunning visual effects with a deeply engaging narrative about power, prophecy, and the weight of destiny. Timothée Chalamet’s Paul Atreides is pushed to the brink, and the supporting cast, especially Zendaya and Austin Butler, deliver outstanding performances. Hans Zimmer’s score is thunderous, driving the film’s tension relentlessly.',
      status: 'APPROVED',
      authorId: user.id,
    }
  });

  console.log("Created Review:", review.title);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
