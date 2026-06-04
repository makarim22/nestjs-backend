const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./dev.db');
db.serialize(() => {
  db.run("UPDATE MovieReview SET status = 'APPROVED'");
  db.run("UPDATE BookReview SET status = 'APPROVED'");
});
db.close(() => console.log('Updated!'));
