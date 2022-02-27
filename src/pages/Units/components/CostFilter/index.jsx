import React from 'react'
import Checkbox from '../Checkbox'
import Range from '../Range'
import PropTypes from 'prop-types'
import './style.scss'

function CostFilter ({ title, onChange }) {
  return (
    <div className='cost-filter-container'>
        <Checkbox title={title}></Checkbox>
        <Range></Range>
    </div>
  )
}

CostFilter.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func
}

export default CostFilter
