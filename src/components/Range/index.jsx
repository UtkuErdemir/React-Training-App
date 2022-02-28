import React from 'react'
import PropTypes from 'prop-types'

function Range ({ onChange, disabled, max, min, value }) {
  const rangeValue = value || 0
  const rangeMin = min || 0
  const rangeMax = max || 200
  return (
    <input disabled={disabled} type="range" min={rangeMin} max={rangeMax} value={rangeValue} onChange={(e) => onChange(e.target.value)}/>
  )
}

Range.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.string
}

export default Range
