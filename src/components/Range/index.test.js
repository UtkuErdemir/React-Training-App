import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Range from '.'

test('it displays default value', () => {
  render(<Range/>)
  const range = screen.getByTestId('range')
  expect(range).toHaveAttribute('min', '0')
  expect(range).toHaveAttribute('max', '200')
  expect(range).toHaveAttribute('value', '0')
})

test('it has given values', () => {
  render(<Range min={10} max={30} value={15}/>)
  const range = screen.getByTestId('range')
  expect(range).toHaveAttribute('min', '10')
  expect(range).toHaveAttribute('max', '30')
  expect(range).toHaveAttribute('value', '15')
})

test('it displays title with default align', () => {
  const onChange = jest.fn()
  render(<Range onChange={onChange} />)
  const range = screen.getByTestId('range')
  fireEvent.change(range, { target: { value: 30 } })
  expect(onChange).toBeCalledWith('30')
})
