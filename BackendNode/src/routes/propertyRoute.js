const express = require('express');
const upload = require('../config/multer');
const { createProperty, getAllProperties } = require('../controllers/propertyController');

const propertyRouter = express.Router();

propertyRouter.post('/', 
  upload.fields([
    { name: 'imagePrincipal', maxCount: 1 }, 
    { name: 'images', maxCount: 10 }
  ]), 
  createProperty
)
propertyRouter.get('/' ,getAllProperties);


module.exports = propertyRouter;
