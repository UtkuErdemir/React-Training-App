import React from 'react'
import Checkbox from '../Checkbox'
import Range from '../Range'
import './style.scss'

function CostFilter () {
  return (
    <div className='cost-filter-container'>
        <Checkbox title="Food"></Checkbox>
        <Range></Range>
    </div>
  )
}

export default CostFilter
