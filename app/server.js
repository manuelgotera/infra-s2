const express = require('express');
const { Pool } = require('pg');
const app = express();


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get('/', async (req, res) => {
  try {

    const client = await pool.connect();
    res.send('<h1>API del Punto de Venta conectada exitosamente a la Base de Datos PostgreSQL </h1>');
    client.release();
  } catch (err) {
    console.error(err);
    res.send('API corriendo, pero hubo un error conectando a la base de datos.');
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000');
});