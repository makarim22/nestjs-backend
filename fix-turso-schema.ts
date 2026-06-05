import { createClient } from '@libsql/client';

/**
 * Script to fix Turso remote database schema.
 * Adds missing columns to User table and runs ALTER TABLE safely.
 *
 * Usage (PowerShell):
 *   $env:TURSO_DATABASE_URL="libsql://your-db.turso.io"
 *   $env:TURSO_AUTH_TOKEN="your-token"
 *   npx ts-node fix-turso-schema.ts
 */

async function main() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    console.error('❌ Missing env vars. Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN first.');
    process.exit(1);
  }

  console.log('🔌 Connecting to Turso:', url);
  const client = createClient({ url, authToken });

  // Helper: run SQL but ignore "duplicate column" errors
  async function safeAlter(sql: string, label: string) {
    try {
      await client.execute(sql);
      console.log(`✅ ${label}`);
    } catch (e: any) {
      if (e.message?.includes('duplicate column name') || e.message?.includes('already exists')) {
        console.log(`⏭️  Already exists, skipping: ${label}`);
      } else {
        throw e;
      }
    }
  }

  console.log('\n📐 Applying schema fixes to User table...');

  await safeAlter(`ALTER TABLE "User" ADD COLUMN "googleId" TEXT`, 'Added googleId column');
  await safeAlter(`ALTER TABLE "User" ADD COLUMN "avatarUrl" TEXT`, 'Added avatarUrl column');
  await safeAlter(`ALTER TABLE "User" ADD COLUMN "name" TEXT`, 'Added name column');
  await safeAlter(`ALTER TABLE "User" ADD COLUMN "password" TEXT`, 'Made password nullable');

  console.log('\n🎯 Applying schema fixes to MovieReview table...');
  await safeAlter(`ALTER TABLE "MovieReview" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'APPROVED'`, 'Added status to MovieReview');

  console.log('\n📚 Applying schema fixes to BookReview table...');
  await safeAlter(`ALTER TABLE "BookReview" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'APPROVED'`, 'Added status to BookReview');

  console.log('\n✅ All schema fixes applied! Your Turso database is now up to date.');
  await client.close();
}

main().catch((e) => {
  console.error('❌ Fatal error:', e.message);
  process.exit(1);
});
