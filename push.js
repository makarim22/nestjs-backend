const { createClient } = require('@libsql/client');
const fs = require('fs');

async function run() {
  const url = 'libsql://literaryme-makarim22.aws-ap-northeast-1.turso.io';
  const authToken = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODA1NzMyNTQsImlkIjoiMDE5ZTkyNmQtYTkwMS03MDg0LTlmYmEtMDAxZDRmMjAxZGRlIiwicmlkIjoiYWYxNDAzZmUtMGI0Ny00ZDVlLTk4ZGYtMTY5NmM5ODZhYWM4In0.Ou5dh1Bw0tM7YYH1HqmvFQo4aUVFFrj6KFcEUJJc1hS-fDDA1zJTgwSxOjuY_zGTamNQVUgPTGZrQ3_DNzI6BQ';
  
  const client = createClient({ url, authToken });
  
  const { execSync } = require('child_process');
  const sql = execSync('npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script').toString('utf8');
  
  const statements = sql
    .replace(/--.*$/gm, '') // Strip comments
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0);
    
  console.log(`Executing ${statements.length} statements...`);
  
  for (const statement of statements) {
    try {
      await client.execute(statement);
      console.log('Success:', statement.substring(0, 50).replace(/\n/g, ' ') + '...');
    } catch (err) {
      // If it already exists, ignore
      if (err.message.includes('already exists')) {
        console.log('Already exists:', statement.substring(0, 50).replace(/\n/g, ' ') + '...');
      } else {
        console.error('Error executing:', err.message);
      }
    }
  }
  
  console.log('Done!');
}

run();
