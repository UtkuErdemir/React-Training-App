import React from 'react'
import PropTypes from 'prop-types'

function Image ({ src, width, height }) {
  const imgSrc = src || 'https://utkuerdemir.com/logo.png'
  const imgWidth = width || 32
  const imgHeight = height || 32
  return (
    <img src={imgSrc} height={imgHeight} width={imgWidth}></img>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Image
