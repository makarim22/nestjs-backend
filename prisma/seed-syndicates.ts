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

  // Create Syndicate
  const syndicate = await prisma.syndicate.upsert({
    where: { name: 'The Criterion Collective' },
    update: {},
    create: {
      name: 'The Criterion Collective',
      description: 'A syndicate dedicated to the exploration and critique of classic, arthouse, and foundational cinema. We look beyond the mainstream to find the true artistry of film.',
      avatarUrl: 'https://placehold.co/150x150/222222/ffffff/png?text=CC',
      creatorId: user.id,
      members: {
        create: [
          {
            userId: user.id,
            role: 'LEADER'
          }
        ]
      },
      targets: {
        create: [
          {
            title: 'Seven Samurai',
            type: 'MOVIE',
            addedById: user.id,
            status: 'ACTIVE'
          },
          {
            title: 'Persona',
            type: 'MOVIE',
            addedById: user.id,
            status: 'INVESTIGATED'
          }
        ]
      },
      messages: {
        create: [
          {
            content: 'Welcome to the collective. Let us focus our next discussion on Kurosawa.',
            authorId: user.id
          },
          {
            content: 'I agree. Seven Samurai seems like the perfect starting point.',
            authorId: user.id
          }
        ]
      }
    }
  });

  console.log("Created Syndicate:", syndicate.name);
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
