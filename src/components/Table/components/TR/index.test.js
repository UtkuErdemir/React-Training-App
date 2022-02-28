import { render, screen } from '@testing-library/react'
import React from 'react'
import TR from '.'

test('it displays given children', () => {
  render(<table><tbody><TR><td>TEST</td></TR><TR><td>TEST</td></TR></tbody></table>)
  const items = screen.getAllByText('TEST')
  expect(items.length).toBe(2)
})
