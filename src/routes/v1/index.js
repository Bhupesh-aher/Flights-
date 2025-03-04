const express = require('express')
const airplanesRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')

const router = express.Router();

router.use('/airplanes', airplanesRoutes)
router.use('/cities', cityRoutes)


module.exports = router;

