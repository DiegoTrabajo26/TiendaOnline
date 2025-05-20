
"use strict";
import express from 'express';
import cors from 'cors';
import { connection } from './dataBase.js';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());



// Sirve la carpeta 'uploads' como pública
app.use('/uploads', express.static(path.resolve('src/uploads')));

// Obtener todos los productos
app.get('/productos', (req, res) => {
  const limit = parseInt(req.query.limit) || 8; // valor por defecto si no se pasa
  const query = 'SELECT * FROM Producto LIMIT ?';

  connection.query(query, [limit], (err, results) => {
    if (err) {
      console.error('Error al consultar productos:', err);
      return res.status(500).json({ error: 'Error en la consulta de productos' });
    }
    res.json(results);
  });
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM Producto WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al consultar el producto:', err);
      return res.status(500).json({ error: 'Error al consultar el producto' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(results[0]);
  });
});


// Obtener todos los artículos del carrito
app.get('/articulosCarrito', (req, res) => {
  connection.query('SELECT * FROM articulo_carrito', (err, results) => {
    if (err) {
      console.error('Error al consultar artículos del carrito:', err);
      return res.status(500).json({ error: 'Error en la consulta del carrito' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
