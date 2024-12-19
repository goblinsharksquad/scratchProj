const db = require('./backend/db');

async function test() {
  try {
    const insertSampleQuery = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;',
      ['Tyler', 'tyler@gmail.com']
    );

    const retrieveResult = await db.query('SELECT * FROM users;');
    console.log(retrieveResult.rows);
  } catch (err) {
    console.error('error', err.stack);
  }
}

test();
