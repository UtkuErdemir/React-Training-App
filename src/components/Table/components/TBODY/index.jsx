import React from 'react'
import PropTypes from 'prop-types'

function TBODY ({ children }) {
  return (
      <tbody>{ children }</tbody>
  )
}

TBODY.propTypes = {
  children: PropTypes.array
}

export default TBODY
