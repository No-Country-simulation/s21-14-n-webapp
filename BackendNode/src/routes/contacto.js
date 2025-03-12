const express = require('express');
const { crearConsulta, obtenerConsultas, obtenerConsultaPorId, actualizarConsulta, eliminarConsulta } = require('../controllers/contactoController');
const multer = require('multer');


const router = express.Router();
const upload = multer();

router.post('/', upload.none(), crearConsulta);
router.get('/', obtenerConsultas);
router.get('/:id', obtenerConsultaPorId);
router.delete('/:id', eliminarConsulta);


module.exports = router;