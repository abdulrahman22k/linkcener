import axios from 'axios'
import apiDefaultConfig from './apiDefaultConfig'

const apiConfig = { ...apiDefaultConfig }

export default class apiService {
  constructor() {
    this.apiConfig = {...this.apiConfig}
    
  }
    createPage(...args) {
        return  axios.post(this.apiConfig.createPageEndpoint, ...args)
      }
}  