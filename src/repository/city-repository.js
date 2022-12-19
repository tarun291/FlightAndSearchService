const { Op } = require('sequelize');

const { City } = require('../models/index')


class CityRepository {
    async createCity({ name }) { //{name:"Agra"}
        try {
            const city = await City.create({
                name: name //name
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        console.log(cityId);
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {  //{name:"Delhi"} data is an object form here
        try {
            // below approach also work but will not return updated obkject
            // If you are using PG sequal then returning true can be used, else not
            /* const city = await City.update(data, {
                where: {
                    id: cityId
                },
             })*/
            /* This approach will return apdated objct also in MySQL*/
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllCities(){
        try {
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;