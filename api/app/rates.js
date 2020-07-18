const express = require('express');

const Rate = require('../models/Rate');
const Cafe = require('../models/Cafe');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/:id', auth, async (req, res) => {
    try {
        const rate = await Rate.findOne({_id: req.params.id});
        res.send(rate);
    } catch (e) {
        console.log(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Rate.delete({_id: req.params.id});
        res.send('Deleted')
    } catch (e) {
        console.log(e);
    }
});

router.post('/:id', auth, async (req, res) => {
    try {
        const whiteList = {
            author: req.user.id,
            cafe: req.params.id,
            food: req.body.food,
            service: req.body.service,
            interior: req.body.interior,
            text: req.body.text
        };
        const rate = new Rate(whiteList);
        await rate.save();
        res.send('Added');
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;