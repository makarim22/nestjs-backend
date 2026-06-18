import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const url = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

const adapter = new PrismaLibSql({
  url,
  ...(authToken ? { authToken } : {}),
});
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding Quartermaster Store Items...')

  const items = [
    // Avatars
    {
      name: 'Agent Redacted',
      description: 'A classified avatar profile picture shrouded in mystery.',
      type: 'AVATAR',
      cost: 100,
      assetUrl: '/avatars/redacted.png',
    },
    {
      name: 'Neon Cyberpunk',
      description: 'High-tech avatar frame for the digital operative.',
      type: 'AVATAR',
      cost: 250,
      assetUrl: '/avatars/cyberpunk.png',
    },
    // Themes
    {
      name: 'Matrix Green Terminal',
      description: 'Override the system UI with a classic phosphor green terminal aesthetic.',
      type: 'THEME',
      cost: 500,
      assetUrl: 'theme-matrix',
    },
    {
      name: 'Midnight Noir',
      description: 'A deeply contrasted black and white theme suited for hardboiled detectives.',
      type: 'THEME',
      cost: 500,
      assetUrl: 'theme-noir',
    },
    // Badges
    {
      name: 'Top Brass',
      description: 'A badge displaying your elite status among the syndicates.',
      type: 'BADGE',
      cost: 1000,
      assetUrl: '🎖️',
    },
    {
      name: 'Ghost in the Machine',
      description: 'An elusive badge for the ultimate stealth operative.',
      type: 'BADGE',
      cost: 750,
      assetUrl: '👻',
    }
  ]

  for (const item of items) {
    await prisma.storeItem.upsert({
      where: { name: item.name },
      update: item,
      create: item,
    })
  }

  console.log('Quartermaster Store seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
