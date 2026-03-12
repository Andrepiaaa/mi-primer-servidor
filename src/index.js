const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('¡Mi primer servidor con MongoDB funciona!');
});

// Connect to MongoDB and start server
const { connectToDatabase } = require('./models/userModel');

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`API disponible en http://localhost:${PORT}/api/users`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();// PR de prueba para Tembo - Thu Mar 12 12:08:31 -05 2026
// PR de prueba - Thu Mar 12 15:20:03 -05 2026
