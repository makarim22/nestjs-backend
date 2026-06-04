const { createClient } = require('@libsql/client');

async function run() {
  const localDb = createClient({ url: 'file:./dev.db' });
  const remoteDb = createClient({
    url: 'libsql://literaryme-makarim22.aws-ap-northeast-1.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODA1NzMyNTQsImlkIjoiMDE5ZTkyNmQtYTkwMS03MDg0LTlmYmEtMDAxZDRmMjAxZGRlIiwicmlkIjoiYWYxNDAzZmUtMGI0Ny00ZDVlLTk4ZGYtMTY5NmM5ODZhYWM4In0.Ou5dh1Bw0tM7YYH1HqmvFQo4aUVFFrj6KFcEUJJc1hS-fDDA1zJTgwSxOjuY_zGTamNQVUgPTGZrQ3_DNzI6BQ',
  });

  const tables = [
    'User',
    'Tag',
    'Post',
    '_PostToTag',
    'Webhook',
    'MovieReview',
    'BookReview',
    'Comment',
    'SavedMovie',
    'SavedBook'
  ];

  console.log('Clearing Turso database...');
  for (const table of [...tables].reverse()) {
    await remoteDb.execute(`DELETE FROM "${table}"`);
  }

  for (const table of tables) {
    console.log(`Migrating ${table}...`);
    try {
      const result = await localDb.execute(`SELECT * FROM "${table}"`);
      if (result.rows.length === 0) {
        console.log(`  No data in ${table}`);
        continue;
      }
      
      let successCount = 0;
      for (const row of result.rows) {
        const columns = result.columns;
        const values = columns.map(c => row[c]);
        
        const placeholders = columns.map(() => '?').join(', ');
        const cols = columns.map(c => `"${c}"`).join(', ');
        
        try {
          await remoteDb.execute({
            sql: `INSERT OR IGNORE INTO "${table}" (${cols}) VALUES (${placeholders})`,
            args: values
          });
          successCount++;
        } catch (e) {
          console.error(`  Error inserting into ${table} (${row.id}):`, e.message);
        }
      }
      console.log(`  Migrated ${successCount}/${result.rows.length} rows for ${table}`);
    } catch (e) {
       console.error(`  Error fetching table ${table}:`, e.message);
    }
  }
  console.log('Migration complete!');
}

run();
