
const { FlightService } = require('../services/index');

const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureId: req.body.departureId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            sucess: true,
            err: {},
            message: "Successfully created a flight"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        console.log(req.query);
        const responce = await flightService.getAllFlightData(req.query);
        // console.log(req.query.params);
        return res.status(SuccessCodes.OK).json({
            data: responce,
            success: true,
            err: {},
            message: "Successfully fetched flight",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const responce = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: responce,
            success: true,
            err: {},
            message: "Successfully fetched flight",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetched  a flight",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get
}