import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Checkbox ({ onPress, value, title }) {
  const checkboxTitle = title || 'Checkbox'
  return (
    <>
      <input type="checkbox" id="checkbox" onClick={() => { onPress(value) }}></input>
      <label htmlFor="checkbox" data-testid="checkbox">{checkboxTitle}</label>
    </>
  )
}

Checkbox.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string
}

export default Checkbox
