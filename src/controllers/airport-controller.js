const { StatusCodes } = require('http-status-codes')
const { Airportservice } = require('../services')
const {SuccessResponse, ErrorResponse} = require('../utils/common')


/**
  POST : "/airports"
  req-body: {name: 'IGI', code: '5', address: ''. cityId: 'DEL'}
 */

async function createAirport(req, res) {
    try {
        const airport = await Airportservice.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });

        SuccessResponse.data = airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}


/**
  POST : "/airports"
  req-body: {}
 */

async function getAirports(req, res) {
    try {

        const airports = await Airportservice.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}



/**
  POST : "/airports/:id"
  req-body: {}
 */

async function getAirport(req, res) {
    try {

        const airports = await Airportservice.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}



/**
  DELETE : "/airports/:id"
  req-body: {}
 */

async function destroyAirport(req, res) {
    try {

        const response = await Airportservice.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}