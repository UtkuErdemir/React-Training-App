import { changeCurrentRoute, getCurrentRoute } from './titleAction'
import titleInitialValue from './titleInitialState'
import reducer from './titleReducer'

test('it returns initial value', () => {
  expect(reducer(undefined, {})).toEqual(titleInitialValue.title)
})

test('it returns given value', () => {
  const newTitle = 'TEST'
  expect(reducer(undefined, changeCurrentRoute(newTitle))).toEqual(newTitle)
})

test('it returns current value', () => {
  const currentTitle = 'TEST'
  expect(reducer(currentTitle, getCurrentRoute())).toEqual(currentTitle)
})
