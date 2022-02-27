import React from 'react'
import { segments } from '../../utils/constants'
import CostFilter from './components/CostFilter'
import ItemTitle from './components/ItemTitle'
import Segment from './components/Segment'

function Units () {
  return (
    <div>
      <ItemTitle value={'Ages'}></ItemTitle>
      <Segment items={segments}></Segment>
      <ItemTitle value={'Costs'}></ItemTitle>
      <CostFilter></CostFilter>
      <CostFilter></CostFilter>
      <CostFilter></CostFilter>
    </div>
  )
}

export default Units
