require('dotenv').config();
const Property = require('../models/Property');
const cloudinary = require('../config/cloudinaryConfig');

const createProperty = async (req, res) => {
  try {
    const { title, description, price, address, squareMeters, typeProperty, typeContract } = req.body;
    const { files } = req;

    if (!files || !files['imagePrincipal'] || !files['images']) {
      return res.status(400).json({ error: 'Main image and at least one additional image are required' });
    }

    // Subir imagen principal a Cloudinary
    const imagePrincipalUpload = await cloudinary.uploader.upload(files.imagePrincipal[0].path, {
      folder: 'real-estate',
    });

    // Subir imágenes adicionales a Cloudinary en paralelo
    const imagesUpload = await Promise.all(
      files.images.map(file => cloudinary.uploader.upload(file.path, { folder: 'real-estate' }))
    );

    // Obtener las URLs de las imágenes
    const imagePrincipal = imagePrincipalUpload.secure_url;
    const images = imagesUpload.map(image => image.secure_url);

    // Crear la propiedad en la base de datos
    const newProperty = new Property({
      title,
      description,
      price,
      address,
      squareMeters,
      imagePrincipal,
      images,
      typeProperty,
      typeContract
    });

    await newProperty.save();
    res.status(201).json({ message: 'Property created successfully', property: newProperty });

  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Error fetching properties', details: error.message });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.status(200).json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) return res.status(404).json({ error: 'Property not found' });
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, address, squareMeters, typeProperty, typeContract, isSelected } = req.body;
    const { files } = req;

    let updatedData = { title, description, price, address, squareMeters, typeProperty, typeContract, isSelected };

    const property = await Property.findById(id);
    if (!property) return res.status(404).json({ error: 'Property not found' });

    // Si hay nueva imagen principal, subir a Cloudinary
    if (files?.imagePrincipal) {
      const imagePrincipalUpload = await cloudinary.uploader.upload(files.imagePrincipal[0].path, { folder: 'real-estate' });
      updatedData.imagePrincipal = imagePrincipalUpload.secure_url;
    }

    // Si hay nuevas imágenes adicionales, subirlas a Cloudinary
    if (files?.images) {
      const imagesUpload = await Promise.all(
        files.images.map(file => cloudinary.uploader.upload(file.path, { folder: 'real-estate' }))
      );
      updatedData.images = imagesUpload.map(image => image.secure_url);
    }

    const updatedProperty = await Property.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({ message: 'Property updated successfully', property: updatedProperty });

  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const toggleIsSelected = async (req, res) => {
  try {
    const { id } = req.params;
    
    const property = await Property.findById(id);
    if (!property) return res.status(404).json({ error: 'Property not found' });
    
    // Cambiar el estado de isSelected
    property.isSelected = !property.isSelected;
    await property.save();
    
    res.status(200).json({ message: 'Property updated successfully', property });
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

module.exports = { createProperty,toggleIsSelected,  getAllProperties, getPropertyById, deleteProperty, updateProperty };
