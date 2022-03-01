import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function TR ({ children, onPress }) {
  return (
      <tr data-testid="tr" onClick={() => onPress()}>{ children }</tr>
  )
}

TR.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.array
}

export default TR
