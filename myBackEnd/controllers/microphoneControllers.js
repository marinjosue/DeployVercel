const pool = require('../config/db');

const microphoneControllers = {
  createMicrophone: async (req, res) => {
    try {
      const { brand, type, price } = req.body;

 
      if (!brand || !type || !price) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      if (isNaN(price) || price <= 0) {
        return res.status(400).json({ message: 'error the price.' });
      }


      const [result] = await pool.query(
        `INSERT INTO microphone (brand, type, price) VALUES (?, ?, ?)`,
        [brand, type, price]
      );

   
      res.status(201).json({
        message: 'Successfully created microphone',
        microphoneId: result.insertId, // ID generado por la base de datos
      });
    } catch (error) {
      console.error('Microphone Creation Error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  createPrueba: async (req, res) => {
    try {
      const { brand, model, state,price } = req.body;

 
      if (!brand || !type || !price) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      if (isNaN(price) || price <= 0) {
        return res.status(400).json({ message: 'error the price.' });
      }


      const [result] = await pool.query(
        `INSERT INTO prueba (brand, model,price,state) VALUES (?, ?, ?,?)`,
        [brand, model,state,price]
      );

   
      res.status(201).json({
        message: 'Successfully created microphone',
        microphoneId: result.insertId, 
      });
    } catch (error) {
      console.error('Microphone Creation Error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
};

module.exports = microphoneControllers;
