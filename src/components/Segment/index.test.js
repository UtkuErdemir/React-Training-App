import { render, screen } from '@testing-library/react'
import React from 'react'
import Segment from '.'
import { segments } from '../../utils/constants'

test('it displays segment items same as items length', () => {
  const items = segments
  render(<Segment items={items}/>)
  expect(screen.getAllByTestId('segment-item').length).toBe(segments.length)
})
