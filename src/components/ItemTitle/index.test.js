import { render, screen } from '@testing-library/react'
import React from 'react'
import ItemTitle from '.'

test('it displays given value', () => {
  render(<ItemTitle value='ItemTitleTest'/>)
  const itemTitle = screen.getByText('ItemTitleTest')
  expect(itemTitle).toBeInTheDocument()
})

test('it displays title with given align', () => {
  render(<ItemTitle align='center'/>)
  const itemTitle = screen.getByTestId('title')
  expect(itemTitle).toHaveAttribute('align', 'center')
})

test('it displays title with default align', () => {
  render(<ItemTitle />)
  const itemTitle = screen.getByTestId('title')
  expect(itemTitle).toHaveAttribute('align', 'left')
})
