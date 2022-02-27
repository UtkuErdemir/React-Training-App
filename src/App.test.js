import { render } from '@testing-library/react'
import React from 'react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: MemoryRouter })
}

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
})
