// ** JWT Service Import
import ApiService from './apiService'

// ** Export Service as useJwt
export default function useApi() {
  const api = new ApiService()

  return {
    api
  }
}
