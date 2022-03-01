import unitsInitialValue from './unitsInitialState'
import { GET_ALL_UNITS_SUCCESS } from './unitsTypes'

export default (state = unitsInitialValue.units, action) => {
  switch (action.type) {
    case GET_ALL_UNITS_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}
