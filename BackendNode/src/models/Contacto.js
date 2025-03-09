const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombreApellido: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },
  tipoConsulta: {
    type: String,
    required: true,
    enum: ['General', 'Soporte', 'Ventas', 'Otro'],
    trim: true
  },
  mensaje: {
    type: String,
    required: true,
    trim: true
  },
  titulo: {
    type: String,
    default: 'Sin título',
    trim: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contacto', contactoSchema);
