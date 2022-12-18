const { CityRepository } = require('../repository/index');

// const cityRepository = new CityRepository();

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }
    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity({name:data.name});
            return city;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteCity(cityId) {
        try {
            const response = this.cityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = CityService;