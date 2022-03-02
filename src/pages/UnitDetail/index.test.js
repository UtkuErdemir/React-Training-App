import UnitDetail, { filterFn } from '.'
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
    <UnitDetail />
  )
  expect(mockDispatch).toBeCalled()
})

test('it emits change title when component rendering', () => {
  renderWithRouter(
      <UnitDetail />
  )
  const state = { units: { data: [{ id: 0 }] } }
  const result = filterFn(state, 0)
  expect(result).toStrictEqual({ id: 0 })
})
