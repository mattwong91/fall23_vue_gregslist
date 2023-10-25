import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('Got Houses', response.data)
    const newHouses = response.data.map(obj => new House(obj))
    AppState.houses = newHouses
  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    logger.log('Created House', response.data)
    const newHouses = new House(response.data)
    AppState.houses.push(newHouses)
  }

  async getHouseById(houseId) {
    const response = await api.get(`api/houses/${houseId}`)
    logger.log('Got house by ID: ', response.data)
    const newHouse = new House(response.data)
    AppState.activeHouse = newHouse
  }


}

export const housesService = new HousesService()