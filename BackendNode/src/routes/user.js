const express = require('express');
const { registerUser, loginUser, getAllUsers, deleteUser } = require('../controllers/userController');

const router = express.Router();

// Ruta de registro
router.post('/register', registerUser);

// Ruta de login
router.post('/login', loginUser);

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

module.exports = router;
