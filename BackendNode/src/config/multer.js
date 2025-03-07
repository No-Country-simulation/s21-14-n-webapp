const multer = require('multer')
const { CloudinaryStorage } = require( 'multer-storage-cloudinary');
const cloudinary = require( './cloudinaryConfig');


const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: 'real-estate',
      allowed_formats: ['jpg', 'png', 'jpeg'],
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
