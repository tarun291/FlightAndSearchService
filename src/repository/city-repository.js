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
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;