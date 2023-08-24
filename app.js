const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL veritabanı bağlantı ayarları
const pool = new Pool({
  host: '185.141.34.68',
  port: 5432,
  user: 'postgres',
  password: '123',
  database: 'postgres',
});

// Kullanıcıları listelemek için endpoint
app.get('/users', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    client.release(); // İstemciyi serbest bırak

    res.json(result.rows);
  } catch (error) {
    console.error('Kullanıcılar getirilirken hata:', error);
    res.status(500).json({ error: 'Bir hata oluştu' });
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
