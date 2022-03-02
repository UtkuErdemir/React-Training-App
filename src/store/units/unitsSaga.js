import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllUnits } from '../../service/unitsService'
import { getAllUnitsSuccess } from './unitsActions'
import { GET_ALL_UNITS_REQUEST } from './unitsTypes'
export function * fetchData () {
  try {
    const data = yield call(getAllUnits)
    yield put(getAllUnitsSuccess(data))
  } catch (err) {
  }
}
export default function * unitSaga () {
  yield takeEvery(GET_ALL_UNITS_REQUEST, fetchData)
}
