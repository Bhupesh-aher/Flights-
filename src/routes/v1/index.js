const express = require('express')
const airplanesRoutes = require('./airplane-routes')

const router = express.Router();

router.use('/airplanes', airplanesRoutes)

module.exports = router;

