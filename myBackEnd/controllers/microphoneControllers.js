const pool = require('../config/db');

const microphoneControllers = {
  createMicrophone: async (req, res) => {
    try {
      const { brand, type, price } = req.body;

 
      if (!brand || !type || !price) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
      }

      if (isNaN(price) || price <= 0) {
        return res.status(400).json({ message: 'El precio debe ser un número válido mayor a 0.' });
      }


      const [result] = await pool.query(
        `INSERT INTO microphone (brand, type, price) VALUES (?, ?, ?)`,
        [brand, type, price]
      );

   
      res.status(201).json({
        message: 'Micrófono creado con éxito',
        microphoneId: result.insertId, // ID generado por la base de datos
      });
    } catch (error) {
      console.error('Error al crear el micrófono:', error);
      res.status(500).json({ message: 'Error del servidor' });
    }
  },
};

module.exports = microphoneControllers;
