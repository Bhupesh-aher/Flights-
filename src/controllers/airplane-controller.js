const { StatusCodes } = require('http-status-codes')
const { AirplaneServices } = require('../services')
const {SuccessResponse, ErrorResponse} = require('../utils/common')


/**
  POST : "/airplanes"
  req-body: {modelNumber: 'airbus320', capacity: 200}
 */

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneServices.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}


async function getAirplanes(req, res) {
    try {

        const airplanes = await AirplaneServices.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}