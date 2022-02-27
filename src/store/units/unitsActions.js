import { GET_ALL_UNITS_REQUEST, GET_ALL_UNITS_SUCCESS } from './unitsTypes'

export const getAllUnits = () => ({
  type: GET_ALL_UNITS_REQUEST
})

export const getAllUnitsSuccess = (data) => ({
  type: GET_ALL_UNITS_SUCCESS,
  data
})
