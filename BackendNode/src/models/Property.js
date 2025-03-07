const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  squareMeters: { type: Number, required: true },
  imagePrincipal: { type: String, required: true }, 
  images: { type: [String], required: true }, 
  typeProperty: { type: String, required: true },
  typeContract: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Property', PropertySchema);
