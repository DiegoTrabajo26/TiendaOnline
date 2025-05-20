import mysql from 'mysql2';


export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // cambia por tu usuario
  password: '1234', // cambia por tu contraseña
  database: 'tiendaOnline'
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});