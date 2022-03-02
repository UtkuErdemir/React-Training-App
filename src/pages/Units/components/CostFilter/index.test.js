import { render, screen, fireEvent } from '@testing-library/react'
import React, { useState as useStateMock } from 'react'

import CostFilter from '.'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

const setState = jest.fn()

test('it display default values', () => {
  useStateMock.mockImplementation(init => [init, setState])
  render(<CostFilter></CostFilter>)
  const title = screen.getByText(/Checkbox/g)
  const range = screen.getByTestId('range')

  expect(title).toBeInTheDocument()
  expect(range).toHaveAttribute('min', '0')
  expect(range).toHaveAttribute('value', '0')
  expect(range).toHaveAttribute('max', '200')
})

test('it emit remove filter when clicked to checkbox', () => {
  useStateMock.mockImplementation(init => [init, setState])
  const removeFilter = jest.fn()
  render(<CostFilter removeFilter={removeFilter}></CostFilter>)
  const title = screen.getByTestId('checkbox')
  fireEvent.click(title)
  expect(removeFilter).toBeCalled()
  expect(setState).toBeCalledWith(true)
})

test('it emit when send range triggered', () => {
  useStateMock.mockImplementation(() => [true, setState])
  const removeFilter = jest.fn()
  const onChange = jest.fn()
  render(<CostFilter removeFilter={removeFilter} onChange={onChange}></CostFilter>)
  const range = screen.getByTestId('range')
  fireEvent.change(range, { target: { value: 30 } })
  expect(onChange).toBeCalledTimes(1)
})

test('it doesnt emit when send range triggered but if it is not active', () => {
  useStateMock.mockImplementation(() => [false, setState])
  const removeFilter = jest.fn()
  const onChange = jest.fn()
  render(<CostFilter removeFilter={removeFilter} onChange={onChange}></CostFilter>)
  const range = screen.getByTestId('range')
  fireEvent.change(range, { target: { value: 30 } })
  expect(onChange).toBeCalledTimes(0)
})
