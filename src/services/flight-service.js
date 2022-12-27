const { FlightRepository, AirplaneRepository } = require('../repository/index');

const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            // const airplaneRepository=new AirplaneRepository();
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival time can't be less then or smae as  departure time" };
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            // console.log(data);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}
module.exports = FlightService;
/*
flightNumber
airplaneId
departureAirportId
arrivalAirportId
arrivalTime
departureTime
price
totalSeats
*/