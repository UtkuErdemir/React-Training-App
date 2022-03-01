import { getAllUnits, getAllUnitsSuccess } from './unitsActions'
import reducer from './unitsReducer'
import unitsInitialValue from './unitsInitialState'

test('it returns initial value', () => {
  expect(reducer(undefined, {})).toEqual(unitsInitialValue.units)
})

test('it returns given value', () => {
  const newData = { data: [] }
  expect(reducer(undefined, getAllUnitsSuccess(newData.data))).toEqual(newData)
})

test('it returns current value', () => {
  const currentData = { data: [1] }
  expect(reducer(currentData, getAllUnits())).toEqual(currentData)
})
