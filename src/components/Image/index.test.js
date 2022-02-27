import { render, screen } from '@testing-library/react'
import React from 'react'
import Image from '.'

test('it displays image source', () => {
  const src = 'https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg?fj=1'
  render(<Image src={src} />)
  const image = screen.getByTestId('image')
  expect(image).toHaveAttribute('src', src)
})

test('it displays default values when any values not given', () => {
  render(<Image />)
  const image = screen.getByTestId('image')
  expect(image).toHaveAttribute('width', '32')
  expect(image).toHaveAttribute('height', '32')
  expect(image).toHaveAttribute('src', 'https://utkuerdemir.com/logo.png')
})

test('it has correct width value if any value is given', () => {
  const width = 64
  render(<Image width={width} />)
  const image = screen.getByTestId('image')
  expect(image).toHaveAttribute('width', width.toString())
})

test('it has correct height value if any value is given', () => {
  const height = 64
  render(<Image height={height} />)
  const image = screen.getByTestId('image')
  expect(image).toHaveAttribute('height', height.toString())
})
