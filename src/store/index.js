import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import titleInitialValue from './route/titleInitialState'
import titleReducer from './route/titleReducer'

const sagaMiddleware = createSagaMiddleware()

const INITIAL_STATE = {
  ...titleInitialValue
}

const reducers = combineReducers({ title: titleReducer })

const store = createStore(
  reducers,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
)

export default store
