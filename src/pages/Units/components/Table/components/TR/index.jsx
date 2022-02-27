import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function TR ({ children, onPress }) {
  return (
      <tr onClick={() => onPress(1)}>{ children }</tr>
  )
}

TR.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.object
}

export default TR
