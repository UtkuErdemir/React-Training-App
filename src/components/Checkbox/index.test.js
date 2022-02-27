import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Checkbox from '.'

test('it displays title', () => {
  render(<Checkbox title='CheckboxDisplayTest'/>)
  const checkbox = screen.getByText('CheckboxDisplayTest')
  expect(checkbox).toBeInTheDocument()
})

test('it displays Checkbox text when title is not given.', () => {
  render(<Checkbox />)
  const checkbox = screen.getByText('Checkbox')
  expect(checkbox).toBeInTheDocument()
})

test('it emits given function when pressed the checkbox.', () => {
  const onPress = jest.fn()
  render(<Checkbox onPress={onPress} value={'test'}/>)
  const checkbox = screen.getByTestId('checkbox')
  fireEvent.click(checkbox)
  expect(onPress).toHaveBeenCalledWith('test')
})
