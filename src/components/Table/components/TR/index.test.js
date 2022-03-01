import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TR from '.'

test('it displays given children', () => {
  render(<table><tbody><TR><td>TEST</td></TR><TR><td>TEST</td></TR></tbody></table>)
  const items = screen.getAllByText('TEST')
  expect(items.length).toBe(2)
})

test('it emits given onClick', () => {
  const onPress = jest.fn()
  render(<table><tbody><TR onPress={onPress}><td>TEST</td></TR><TR><td>TEST</td></TR></tbody></table>)
  const tr = screen.getAllByTestId('tr')
  fireEvent.click(tr[0])
  expect(onPress).toBeCalled()
})
