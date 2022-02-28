import { render, screen } from '@testing-library/react'
import React from 'react'
import TBODY from '.'

test('it displays given children', () => {
  render(<table><TBODY><tr><td>TEST</td></tr><tr><td>TEST</td></tr></TBODY></table>)
  const items = screen.getAllByText('TEST')
  expect(items.length).toBe(2)
})
