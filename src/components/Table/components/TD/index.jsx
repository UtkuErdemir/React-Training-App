import React from 'react'
import PropTypes from 'prop-types'

function TD ({ title }) {
  return (
    <td>{ title }</td>
  )
}

TD.propTypes = {
  title: PropTypes.string
}

export default TD
