import { render, screen } from '@testing-library/react'
import React from 'react'
import TABLE from '.'

test('it displays given children', () => {
  render(<TABLE><tbody><tr><td>TEST</td></tr><tr><td>TEST</td></tr></tbody></TABLE>)
  const items = screen.getAllByText('TEST')
  expect(items.length).toBe(2)
})
