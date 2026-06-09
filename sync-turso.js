const { createClient } = require('@libsql/client');
require('dotenv').config();

async function sync() {
  const tursoUrl = process.env.TURSO_DATABASE_URL;
  const tursoToken = process.env.TURSO_AUTH_TOKEN;

  if (!tursoUrl || !tursoToken) {
    console.error("❌ ERROR: TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must be set in your .env file!");
    console.error("Please add them and try again.");
    process.exit(1);
  }

  console.log("🔗 Connecting to local and Turso databases...");
  const localDb = createClient({ url: 'file:./dev.db' });
  const tursoDb = createClient({ url: tursoUrl, authToken: tursoToken });

  console.log("🔍 Fetching table schemas from local database...");
  const tablesResult = await localDb.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'");
  const tables = tablesResult.rows.map(r => r.name);

  console.log(`📦 Found ${tables.length} tables to sync.\n`);

  for (const table of tables) {
    console.log(`Syncing table: ${table}...`);
    const rowsResult = await localDb.execute(`SELECT * FROM "${table}"`);
    const rows = rowsResult.rows;

    if (rows.length === 0) {
      console.log(`  └─ Skipped (0 rows)`);
      continue;
    }

    const columns = Object.keys(rows[0]);
    let successCount = 0;
    let errorCount = 0;

    for (const row of rows) {
      const placeholders = columns.map(() => '?').join(', ');
      const values = columns.map(col => row[col]);
      
      try {
        // We use INSERT OR REPLACE to elegantly overwrite existing records 
        // with the local version without violating unique constraints
        await tursoDb.execute({
          sql: `INSERT OR REPLACE INTO "${table}" ("${columns.join('", "')}") VALUES (${placeholders})`,
          args: values
        });
        successCount++;
      } catch (e) {
        errorCount++;
        console.error(`  └─ ❌ Error inserting row into ${table}:`, e.message);
      }
    }
    
    console.log(`  └─ ✅ Synced ${successCount} rows (Errors: ${errorCount})`);
  }

  console.log("\n🚀 Database sync complete! Your Turso database is now up to date with your local dev.db.");
}

sync().catch(console.error);
