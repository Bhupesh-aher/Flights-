const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data)
        return flight;
    } catch (error) {
        if(error.name === 'sequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function getAllFlights(query){
    let customeFilter = {}
    let sortFilter = [];
    const endingTripTime = " 23:59:00"
    //trips = MUM-DEL
    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split("-")
        customeFilter.departureAirportId = departureAirportId;
        customeFilter.arrivalAirportId = arrivalAirportId;
        // TODO: add a check that they are not same - deaprtureAirport and arrivalAirport should not be same and if same send empty object
    }
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customeFilter.price = {
            [Op.between] : [minPrice, ((maxPrice === undefined) ? 20000 : maxPrice)]
        }
    }
    if(query.travellers) {
        customeFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }
    if(query.tripDate) {
        customeFilter.departureTime = {
            [Op.between] : [query.tripDate, query.tripDate + endingTripTime]
        }
    }
    if(query.sort) {
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters;
    }
    
    try {
        const flights = await flightRepository.getAllFlights(customeFilter, sortFilter)
        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}


module.exports = {
    createFlight,
    getAllFlights
}