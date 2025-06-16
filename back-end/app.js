const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config();

app.use(express.json());

// Routes
const deviceRoutes = require('./routes/device_route');

app.use('/api/device', deviceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
