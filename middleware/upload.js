const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const ext=file.originalname.split('.')[1]
    
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+"."+ext
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})


const upload= multer({storage:storage,limits: { fileSize: maxSize }}).single('selectedFile')
//let uploadFileMiddleware = util.promisify(uploadFile);


module.exports = upload;