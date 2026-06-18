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
      },
    });
  }

  // Dead Drop 1: Unlocks in 2 minutes (for testing the countdown)
  const drop1 = await prisma.deadDrop.create({
    data: {
      title: 'The Kubrick Revelation',
      clue: 'The carpet patterns in The Shining contain a hidden message about the Apollo 11 mission. Look closer at Room 237...',
      content:
        'After years of analysis, film theorists have drawn compelling connections between Stanley Kubrick\'s "The Shining" and the Apollo 11 moon landing. The famous Room 237 sequence, Danny\'s Apollo 11 sweater, and the hexagonal carpet patterns all point to what some believe is Kubrick\'s confession.\n\nWhile most scholars dismiss these theories as pareidolia, the sheer density of visual references cannot be ignored. This transmission contains our syndicate\'s complete frame-by-frame analysis of every lunar reference in the film.\n\nKey findings:\n- The typewriter changes from an Adler to a different model between scenes — a deliberate continuity "error"\n- The impossible window in Ullman\'s office maps to NASA\'s Mission Control layout\n- The twins represent Gemini, the program that preceded Apollo',
      unlocksAt: new Date(Date.now() + 2 * 60 * 1000), // 2 minutes from now
      authorId: user.id,
    },
  });
  console.log('Created Dead Drop 1 (unlocks in 2 min):', drop1.title);

  // Dead Drop 2: Unlocks in 24 hours
  const drop2 = await prisma.deadDrop.create({
    data: {
      title: 'Operation: Rashomon',
      clue: 'Four witnesses. Four truths. Zero consensus. Our deep-dive into unreliable narration arrives tomorrow.',
      content:
        'Akira Kurosawa\'s "Rashomon" (1950) didn\'t just introduce a narrative technique — it fundamentally altered how we understand truth in storytelling. This essay traces the Rashomon Effect through 70 years of cinema, from "Rashomon" to "Gone Girl" to "The Last Duel."\n\nThe unreliable narrator is not merely a trick. It is an ontological argument: that objective truth may not exist, and that every perspective carries its own validity. Kurosawa understood this decades before postmodernism made it fashionable.',
      unlocksAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      authorId: user.id,
    },
  });
  console.log('Created Dead Drop 2 (unlocks in 24h):', drop2.title);

  // Dead Drop 3: Already unlocked
  const drop3 = await prisma.deadDrop.create({
    data: {
      title: 'Decoded: The Color Theory of Wes Anderson',
      clue: 'Every pastel has a purpose.',
      content:
        'Wes Anderson\'s filmography is a masterclass in intentional color design. Each film operates within a strict chromatic palette that reinforces its emotional core.\n\n"The Grand Budapest Hotel" uses a tri-color system: the pink of nostalgia (the hotel itself), the purple of authority (Gustave\'s lobby boy uniform), and the muted earth tones of fascism encroaching on beauty.\n\n"Moonrise Kingdom" bathes in amber and olive — the colors of a fading summer, of childhood about to end.\n\nAnderson doesn\'t use color to decorate. He uses it to narrate.',
      unlocksAt: new Date(Date.now() - 60 * 60 * 1000), // Already unlocked (1 hour ago)
      authorId: user.id,
    },
  });
  console.log('Created Dead Drop 3 (already unlocked):', drop3.title);
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
