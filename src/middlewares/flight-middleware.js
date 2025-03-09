const {StatusCodes} = require('http-status-codes')
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
 

function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["flightNumber found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Airplane Id not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirportId){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Departure Airport Id not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Arrival Airport Id not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalTime){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Arrival Time not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Departure Time Id not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Price not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){

        ErrorResponse.message = 'Something went wrong creating flight';
        ErrorResponse.error = new AppError(["Totalseats not found in the oncoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if(!req.body.seats){

        ErrorResponse.message = 'Something went wrong while creating seats';
        ErrorResponse.error = new AppError(["Seats not found in the incoming request in thr correct form"], StatusCodes.BAD_REQUEST)

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}