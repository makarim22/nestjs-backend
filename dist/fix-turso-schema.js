"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@libsql/client");
async function main() {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;
    if (!url || !authToken) {
        console.error('❌ Missing env vars. Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN first.');
        process.exit(1);
    }
    console.log('🔌 Connecting to Turso:', url);
    const client = (0, client_1.createClient)({ url, authToken });
    async function safeAlter(sql, label) {
        try {
            await client.execute(sql);
            console.log(`✅ ${label}`);
        }
        catch (e) {
            if (e.message?.includes('duplicate column name') || e.message?.includes('already exists')) {
                console.log(`⏭️  Already exists, skipping: ${label}`);
            }
            else {
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
//# sourceMappingURL=fix-turso-schema.js.map