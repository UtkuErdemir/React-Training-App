import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function TR ({ children }) {
  return (
      <tr>{ children }</tr>
  )
}

TR.propTypes = {
  children: PropTypes.object
}

export default TR
