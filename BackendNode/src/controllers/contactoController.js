const Contacto = require('../models/Contacto');

// Crear una nueva consulta de contacto
const crearConsulta = async (req, res) => {
  try {
    const { nombreApellido, email, telefono, tipoConsulta, mensaje, titulo } = req.body;

    if (!nombreApellido || !email || !telefono || !tipoConsulta || !mensaje) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios excepto el título.' });
    }

    const nuevaConsulta = new Contacto({
      nombreApellido,
      email,
      telefono,
      tipoConsulta,
      mensaje,
      titulo: titulo || 'Sin título'
    });

    await nuevaConsulta.save();
    res.status(201).json({ message: 'Consulta enviada correctamente', consulta: nuevaConsulta });

  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la consulta', details: error.message });
  }
};

// Obtener todas las consultas
const obtenerConsultas = async (req, res) => {
  try {
    const consultas = await Contacto.find().sort({ fecha: -1 });
    res.status(200).json(consultas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las consultas', details: error.message });
  }
};

// Obtener una consulta por ID
const obtenerConsultaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await Contacto.findById(id);

    if (!consulta) {
      return res.status(404).json({ error: 'Consulta no encontrada' });
    }

    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la consulta', details: error.message });
  }
};

// Eliminar una consulta
const eliminarConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const consulta = await Contacto.findByIdAndDelete(id);

    if (!consulta) {
      return res.status(404).json({ error: 'Consulta no encontrada' });
    }

    res.status(200).json({ message: 'Consulta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la consulta', details: error.message });
  }
};

module.exports = {
  crearConsulta,
  obtenerConsultas,
  obtenerConsultaPorId,
  eliminarConsulta
};
