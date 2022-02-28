import { render, screen } from '@testing-library/react'
import React from 'react'
import TD from '.'

test('it displays given children', () => {
  render(<table><tbody><tr><TD title="TEST"></TD></tr><tr><TD title="TEST"></TD></tr></tbody></table>)
  const items = screen.getAllByText('TEST')
  expect(items.length).toBe(2)
})
