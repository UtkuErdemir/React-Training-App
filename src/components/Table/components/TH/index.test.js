import { render, screen } from '@testing-library/react'
import React from 'react'
import TH from '.'

test('it displays given children', () => {
  render(<table><thead><tr><TH title="TEST"></TH></tr><tr><TH title="TEST"></TH></tr></thead></table>)
  const items = screen.getAllByText('TEST')
  expect(items.length).toBe(2)
})
