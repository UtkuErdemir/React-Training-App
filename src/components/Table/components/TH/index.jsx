import React from 'react'
import PropTypes from 'prop-types'

function TH ({ title }) {
  return (
    <th>{ title }</th>
  )
}

TH.propTypes = {
  title: PropTypes.string
}

export default TH
