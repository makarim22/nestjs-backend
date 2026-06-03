import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import * as bcrypt from 'bcrypt'

const adapter = new PrismaLibSql({ url: 'file:./dev.db' })
const prisma = new PrismaClient({ adapter })

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10)

  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: { password: hashedPassword },
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  await prisma.post.upsert({
    where: { slug: 'hello-world' },
    update: {},
    create: {
      title: 'Welcome to NexBlog',
      slug: 'hello-world',
      content: 'This is your first post! You can edit this from the CMS backend.',
      status: 'PUBLISHED',
      authorId: user.id,
      publishedAt: new Date(),
    },
  })
  
  await prisma.post.upsert({
    where: { slug: 'second-post' },
    update: {},
    create: {
      title: 'Designing with Vue and NestJS',
      slug: 'second-post',
      content: 'A deep dive into building fullstack applications with Vue for the frontend and NestJS for the backend. It offers a great developer experience.',
      status: 'PUBLISHED',
      authorId: user.id,
      publishedAt: new Date(),
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
