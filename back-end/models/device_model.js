const db = require('../config/db');

const getAllDevices = (callback) => {
    db.query('SELECT * FROM devices', (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = { getAllDevices };