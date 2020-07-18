const express = require('express');

const upload = require('../multer').uploads;
const Picture = require('../models/Picture');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const pictures = await Picture.find({cafe: req.params.id},{"image": 1, "date": 1}).sort({"date": -1});
        res.send(pictures);
    } catch (e) {
        console.log(e);
    }
});

router.post('/:id', upload.single('image'),async (req, res) => {
    try {
        console.log(req.file);
        const picture = new Picture({
            image: req.file.filename,
            cafe: req.params.id
        });
        await picture.save();
        res.send(picture)
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;