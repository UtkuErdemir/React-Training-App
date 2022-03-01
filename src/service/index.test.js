import { getAllUnits } from './unitsService'
import axios from 'axios'

test('it calls get method with units endpoint', async () => {
  const response = { data: { response: true } }
  const result = jest.spyOn(axios, 'get').mockResolvedValue(response)
  const units = await getAllUnits()
  expect(result).toBeCalled()
  expect(units).toEqual(response.data)
})
