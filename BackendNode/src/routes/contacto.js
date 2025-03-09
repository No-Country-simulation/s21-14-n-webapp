const express = require('express');
const { crearConsulta, obtenerConsultas, obtenerConsultaPorId, eliminarConsulta } = require('../controllers/contactoController');


const router = express.Router();


router.post('/', crearConsulta);
router.get('/', obtenerConsultas);
router.get('/:id', obtenerConsultaPorId);
router.delete('/:id', eliminarConsulta);


module.exports = router;