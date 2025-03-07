const Property = require('../models/Property')

const createProperty = async (req, res) => {
  try {
    const { title, description, price, address, squareMeters, typeProperty, typeContract } = req.body;

    if (!req.files || !req.files['imagePrincipal'] || !req.files['images']) {
      return res.status(400).json({ error: 'Main image and at least one additional image are required' });
    }

    const imagePrincipal = req.files['imagePrincipal'][0].path;
    const images = req.files['images'].map(file => file.path);

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
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Error fetching properties", error });
  }
};

module.exports = {
  getAllProperties
};


module.exports = { createProperty, getAllProperties };
