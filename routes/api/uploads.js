const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');
const mongoose = require('mongoose');

const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const Tag = require("../../models/Tag")
const mongoURI = keys.mongoURI;

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return {
            bucketName: 'images',
            filename: file.originalname,
            metadata: req.body
        }
    }
});
const upload = multer({ storage });
const conn = mongoose.createConnection(mongoURI);
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('images');
});

router.post('/', upload.single('image'), (req, res) => {
    res.redirect('/')
});

router.get('/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists',
            })
        }
        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename)
            readstream.pipe(res)
        } else {
            res.status(404).json({
                err: 'Not an image',
            })
        }
    })
})
router.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }
        // Files exist
        return res.json(files);
    });
});

module.exports = router;