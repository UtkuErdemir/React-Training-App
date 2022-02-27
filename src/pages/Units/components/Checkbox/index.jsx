import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Checkbox ({ onPress, value, title }) {
  const checkboxTitle = title || ''
  return (
    <>
      <input type="checkbox" onClick={() => { onPress(value) }}></input>
      <label htmlFor="vehicle1">{checkboxTitle}</label>
    </>
  )
}

Checkbox.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string
}

export default Checkbox
