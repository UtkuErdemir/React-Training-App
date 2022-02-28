import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Segment from '.'
import { segments } from '../../utils/constants'

test('it displays segment items same as items length', () => {
  const items = segments
  render(<Segment items={items}/>)
  expect(screen.getAllByTestId('segment-item').length).toBe(segments.length)
})

test('it emits selected item when clicked any item.', () => {
  const items = segments
  const onSelected = jest.fn()
  render(<Segment items={items} onSelected={onSelected}/>)
  const item = screen.getAllByTestId('segment-item')[0]
  fireEvent.click(item)
  expect(onSelected).toBeCalledWith(segments[0])
})

test('it add active class when value equals any item`s value', () => {
  const items = segments
  render(<Segment items={items} value={items[0].value}/>)
  const item = screen.getAllByTestId('segment-item')[0]
  expect(item).toHaveClass('segment-item-active')
})
