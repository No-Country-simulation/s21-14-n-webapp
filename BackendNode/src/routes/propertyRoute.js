const express = require('express');
const upload = require("../config/multer")
const { createProperty, getAllProperties } = require('../controllers/propertyController');

const router = express.Router();

// Ruta para crear una propiedad
router.post(
  '/',
  upload.fields([
    { name: 'imagePrincipal', maxCount: 1 },
    { name: 'images', maxCount: 10 }
  ]),
  createProperty
);

// Ruta para obtener todas las propiedades
router.get('/', getAllProperties);

module.exports = router;
