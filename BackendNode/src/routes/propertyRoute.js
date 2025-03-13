const express = require('express');
const upload = require("../config/multer");
const { createProperty, getAllProperties, getPropertyById, deleteProperty, updateProperty } = require('../controllers/propertyController');

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
router.get('/', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
}, getAllProperties);

// Ruta para obtener una propiedad por ID
router.get('/:id', getPropertyById);

// Ruta para eliminar una propiedad por ID
router.delete('/:id', deleteProperty);

// Ruta para actualizar una propiedad por ID
router.put(
  '/:id',
  upload.fields([
    { name: 'imagePrincipal', maxCount: 1 },
    { name: 'images', maxCount: 10 }
  ]),
  updateProperty
);

module.exports = router;
