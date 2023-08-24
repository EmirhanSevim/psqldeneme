const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '123',
  database: 'postgres',
});

client.connect();

client.query('select * from postgres', (err, result) => {
  if (!err) {
    console.log(result.rows);
  }
  client.end();
});
