import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import SegmentItem from '.'

test('it emits given function with given value when clicked to it.', () => {
  const fn = jest.fn()
  render(<SegmentItem value='ItemTitleTest' onPress={fn}/>)
  const itemTitle = screen.getByTestId('segment-item')
  fireEvent.click(itemTitle)
  expect(fn).toBeCalledWith('ItemTitleTest')
})

test('it displays given title', () => {
  render(<SegmentItem title="Test"/>)
  const itemTitle = screen.getByText('Test')
  expect(itemTitle).toBeInTheDocument()
})
