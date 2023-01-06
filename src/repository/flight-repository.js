const { Op } = require('sequelize');

const { Flights } = require('../models/index');

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirport) {
            filter.arrivalAirport = data.arrivalAirport;
        }
        if (data.departureAirport) {
            filter.departureAirport = data.departureAirport;
        }
        let priceFilter = [];
        if (data.minPrice) {
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        Object.assign(filter, { [Op.and]: priceFilter });
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
    async updateFlight(flightId, data) {
        try {
            // console.log(flightId);
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;


// where:{
//     arrivalAirportId:2,
//     departureAirportId:4,
//     price:{{Op.gte}:400}
// }