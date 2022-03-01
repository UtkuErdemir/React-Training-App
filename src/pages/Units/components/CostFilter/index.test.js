import { render, screen, fireEvent } from '@testing-library/react'
import React, { useState as useStateMock } from 'react'

import CostFilter from '.'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const setState = jest.fn()

beforeEach(() => {
  useStateMock.mockImplementation(init => [init, setState])
})

test('it display default values', () => {
  render(<CostFilter></CostFilter>)
  const title = screen.getByText(/Checkbox/g)
  const range = screen.getByTestId('range')

  expect(title).toBeInTheDocument()
  expect(range).toHaveAttribute('min', '0')
  expect(range).toHaveAttribute('value', '0')
  expect(range).toHaveAttribute('max', '200')
})

test('it emit remove filter when clicked to checkbox', () => {
  const removeFilter = jest.fn()
  render(<CostFilter removeFilter={removeFilter}></CostFilter>)
  const title = screen.getByTestId('checkbox')
  fireEvent.click(title)
  expect(removeFilter).toBeCalled()
  expect(setState).toBeCalledWith(true)
})
