import React from 'react'
import PropTypes from 'prop-types'

function Range ({ onChange }) {
  return (
    <input type="range" min="0" max="10" onChange={(e) => onChange(e.target.value)}/>
  )
}

Range.propTypes = {
  onChange: PropTypes.func
}

export default Range
