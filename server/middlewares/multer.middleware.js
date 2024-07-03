const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/tempImages');
    },
    filename: (req, file, cb) => {
        console.log(file, 'filename');
        const uniqueSffix = Date.now() + '-' + Math.round(Math.random()*1E9);
        cb(null, uniqueSffix+'-'+file.originalname);
    }
});

exports.upload = multer({storage: storage});