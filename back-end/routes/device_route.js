const express = require('express');
const router = express.Router();
const { getAllDevices } = require('../models/device_model');

router.get('/', (req, res) => {
    getAllDevices((err, devices) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(devices);
    });
});

module.exports = router;