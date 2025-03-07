const express = require('express');
const upload = require('../config/multer');
const { createProperty } = require('../controllers/propertyController');

const propertyRouter = express.Router();

propertyRouter.post('/properties', 
  upload.fields([
    { name: 'imagePrincipal', maxCount: 1 }, 
    { name: 'images', maxCount: 10 }
  ]), 
  createProperty
);

module.exports = propertyRouter;
