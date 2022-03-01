import axios from 'axios'

const baseURL = 'http://localhost:8000/'

export async function getAllUnits () {
  return axios.get(`${baseURL}units`).then(result => result.data)
}
