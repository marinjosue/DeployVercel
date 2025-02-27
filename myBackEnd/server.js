const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const microphoneRoutes = require('./routes/microphoneRoutes'); 
const fs = require('fs');
const path = require('path');


const app = express();

// Configuration de CORS
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/microphones', microphoneRoutes); 

app.get('/productos', async (req, res) => {
  try {
      const data = await fs.promises.readFile(path.join(__dirname, 'model', 'productos.txt'), 'utf8');
      res.setHeader('Content-Type', 'text/plain');
      res.send(data);
  } catch (err) {
      console.error("Error al leer productos.txt:", err);
      res.status(500).send('Error al leer el archivo de productos');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servitor corridor en el puerto ${PORT}`);
});

module.exports = app;
