
const express = require('express');
const Location = require('../models/Location');
const router = express.Router();

router.get('/', async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});

router.post('/', async (req, res) => {
    const newLocation = new Location(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
});

router.put('/:id', async (req, res) => {
    const updated = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await Location.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
