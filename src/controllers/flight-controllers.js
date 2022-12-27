
const { FlightService } = require('../services/index');

const flightService=new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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

const getAll=async(req,res)=>{
    try {
        console.log(req.query);
        const responce=await flightService.getAllFlightData(req.query);
        // console.log(req.query.params);
        return res.status(200).json({
            data:responce,
            success:true,
            err:{},
            message:"Successfully fetched flight",
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


module.exports = {
    create,
    getAll
}