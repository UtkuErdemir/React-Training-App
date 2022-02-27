import axios from 'axios'

const baseURL = 'http://localhost:8000/'
const axiosInstance = axios.create({ baseURL })

export async function getAllUnits () {
  return axiosInstance.get('units').then(result => result.data)
}
