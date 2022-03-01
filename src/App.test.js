import React from 'react'
import App from './App'
import { renderWithRouter } from './utils/renderWithRouter'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}))

test('renders app correctly', () => {
  renderWithRouter(
      <App />
  )
  expect(mockDispatch).toBeCalled()
})
