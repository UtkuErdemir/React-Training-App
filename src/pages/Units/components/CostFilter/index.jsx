import React, { useState } from 'react'
import Checkbox from '../../../../components/Checkbox'
import Range from '../../../../components/Range'
import PropTypes from 'prop-types'
import './style.scss'

function CostFilter ({ title, onChange, removeFilter, max, min, value }) {
  const [isActive, setIsActive] = useState(false)
  const sendRange = value => {
    if (isActive) onChange(title, value)
  }
  const onPress = (value) => {
    removeFilter(title)
    setIsActive(value)
  }
  return (
    <div className='cost-filter-container'>
        <Checkbox title={title} onPress={onPress} value={isActive}></Checkbox>
        <Range max={max} min={min} value={value} onChange={sendRange} disabled={!isActive}></Range>
    </div>
  )
}

CostFilter.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  removeFilter: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.string
}

export default CostFilter
