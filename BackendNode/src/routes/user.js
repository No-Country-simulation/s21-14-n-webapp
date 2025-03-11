const express = require('express');
const { registerUser, loginUser, getAllUsers } = require('../controllers/authController');

const router = express.Router();

// Ruta de registro
router.post('/register', registerUser);

// Ruta de login
router.post('/login', loginUser);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

module.exports = router;
