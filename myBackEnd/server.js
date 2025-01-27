const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const rolesRoutes = require('./routes/rolesRoute');

const app = express();

// Habilitar CORS para todas las rutas
app.use(
    cors({
        origin: '*', // Permitir todas las solicitudes de cualquier dominio
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/roles', rolesRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app; 
