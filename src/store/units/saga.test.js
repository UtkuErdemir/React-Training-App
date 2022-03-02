import { fetchData } from './unitsSaga'
import { getAllUnits } from '../../service/unitsService'
import { runSaga } from 'redux-saga'
jest.mock('../../service/unitsService')

test('should test makeFetchTodosRequest saga', async () => {
  const expected = { type: 'GET_ALL_UNITS_SUCCESS', data: [] }
  getAllUnits.mockResolvedValue(expected.data)

  let dispatched = {}
  await runSaga(
    {
      dispatch: (action) => {
        dispatched = action
      }
    },
    fetchData
  ).toPromise()

  expect(dispatched).toStrictEqual(expected)
})
