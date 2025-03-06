const express = require('express')
const airplanesRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airport-routes')

const router = express.Router();

router.use('/airplanes', airplanesRoutes)
router.use('/cities', cityRoutes)
router.use('/airports', airportRoutes)


module.exports = router;

