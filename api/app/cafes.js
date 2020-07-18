const express = require('express');

const auth = require('../middlewares/auth');
const upload = require('../multer').uploads;
const permit = require('../middlewares/permit');
const Cafe = require('../models/Cafe');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cafes = await Cafe.find({}, {
            "title": 1,
            "description": 1,
            "image": 1,
            "date": 1,
            "overall": 1,
            "food": 1,
            "service": 1,
            "interior": 1
        }).sort({"date": -1});
        res.send(cafes);
    } catch (e) {
        console.log(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cafe = await Cafe.findOne({_id: req.params.id});
        res.send(cafe);
    } catch (e) {
        console.log(e);
    }
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
    try {
        if (!req.body.checkbox) {
           return  res.status(400).send('Bad request');
        }

        const whiteList = {
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename
        };
        const cafe = new Cafe(whiteList);
        await cafe.save();
        res.send(cafe);
    } catch (e) {
        console.log(req.body, e);
        res.status(400).send({message: "Fill all inputs"})
    }
});

router.delete('/:id', permit('admin'), async (req, res) => {
    try {
        await Cafe.deleteOne({_id: req.params.id});
        res.send('Deleted');
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;