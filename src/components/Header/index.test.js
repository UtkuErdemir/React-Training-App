import { screen } from '@testing-library/react'
import React from 'react'
import Header from '.'
import { renderWithRouter } from '../../utils/renderWithRouter'
import routes from '../../utils/routes'

test('it displays pageTitle', () => {
  renderWithRouter(<Header pageTitle='CheckboxDisplayTest'/>)
  const header = screen.getByText('CheckboxDisplayTest')
  expect(header).toBeInTheDocument()
})

test('it displays default pageTitle', () => {
  renderWithRouter(<Header />)
  const header = screen.getByText('React App')
  expect(header).toBeInTheDocument()
})

test('it displays links same as routes count', () => {
  renderWithRouter(<Header />)
  const links = screen.getAllByTestId('link')
  expect(links.length).toBe(routes.length)
})
