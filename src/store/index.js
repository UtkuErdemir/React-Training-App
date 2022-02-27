import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import titleInitialValue from './route/titleInitialState'
import titleReducer from './route/titleReducer'
import unitsInitialValue from './units/unitsInitialState'
import unitsReducer from './units/unitsReducer'
import unitSaga from './units/unitsSaga'

const sagaMiddleware = createSagaMiddleware()

const INITIAL_STATE = {
  ...titleInitialValue,
  ...unitsInitialValue
}

const reducers = combineReducers({ title: titleReducer, units: unitsReducer })

const store = createStore(
  reducers,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(unitSaga)

export default store
