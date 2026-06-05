const { createClient } = require('@libsql/client');

async function run() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  
  if (!url || !authToken) {
    console.error('Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN');
    process.exit(1);
  }

  const client = createClient({ url, authToken });
  
  const statements = [
    "ALTER TABLE MovieReview ADD COLUMN status TEXT NOT NULL DEFAULT 'PENDING';",
    "ALTER TABLE BookReview ADD COLUMN status TEXT NOT NULL DEFAULT 'PENDING';"
  ];
  
  console.log(`Executing ${statements.length} ALTER statements...`);
  
  for (const statement of statements) {
    try {
      await client.execute(statement);
      console.log('Success:', statement);
    } catch (err) {
      if (err.message.includes('duplicate column name')) {
        console.log('Column already exists:', statement);
      } else {
        console.error('Error executing:', err.message);
      }
    }
  }
  
  console.log('Done!');
}

run();
