import Units, { addCostFilterFn, navigateWithId, removeFilterFn, selectUnits } from '.'
import { renderWithRouter } from '../../utils/renderWithRouter'
import React from 'react'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}))

test('it emits change title when component rendering', () => {
  renderWithRouter(
      <Units />
  )
  expect(mockDispatch).toBeCalled()
})

test('it adds to filter given filter name and value', () => {
  renderWithRouter(
        <Units />
  )
  const previous = {}
  const filterName = 'TEST'
  const value = 'TEST'
  const result = addCostFilterFn(previous, filterName, value)
  const expected = { TEST: 'TEST' }
  expect(result).toEqual(expected)
})

test('it removes to filter from object with given filter name', () => {
  renderWithRouter(
          <Units />
  )
  const previous = { TEST: 'TEST' }
  const filterName = 'TEST'
  const result = removeFilterFn(previous, filterName)
  const expected = {}
  expect(result).toEqual(expected)
})

test('it select units wit given filters', () => {
  renderWithRouter(
            <Units />
  )
  const expected = [{ id: 0 }]
  const state = { units: { data: expected } }
  const selectedItem = { value: 'all' }
  const result = selectUnits(state, selectedItem, {})
  expect(expected).toEqual(result)
})

test('it will run given navigate fn with id', () => {
  const navigate = jest.fn()
  navigateWithId(1, navigate)
  expect(navigate).toBeCalledWith('/unit-detail/1')
})
