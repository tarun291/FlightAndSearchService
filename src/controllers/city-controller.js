const { CityService } = require('..//services/index');


const cityService=new CityService();
/*
 * POST
 * data -> req.body
*/

const create = async (req, res) => {
    try{
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            sucess:true,
            message:'Successfully created a city',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to create a city',
            err:error
        })
    }
}
// DELETE -> /city/:id

const destroy = async (req, res) => {
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Successfully deleted a city',
            err:{},
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to delete the city',
            err:error,
        })
    }
}
// GET -> /city/:id
const get = async (req, res) => {
    try{
        const response=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Successfully fetched a city',
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to get the city',
            err:error,
        })
    }
}

// -> /city/:id -> req.body
const update = async(req, res) => {
    try{
        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'A City successfully updated ',
            err:{},
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to update the city',
            err:error,
        })
    }
}
const getAll=async (req,res)=>{
    try {
        const cities=await cityService.getAllCities();
        return res.status(200).json({
            data:cities,
            sucess:true,
            message:'All city fetched sucessfully ',
            err:{},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to fetch the cities',
            err:error,
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}