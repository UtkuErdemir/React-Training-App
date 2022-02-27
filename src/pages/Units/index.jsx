import React from 'react'
import { segments } from '../../utils/constants'
import CostFilter from './components/CostFilter'
import ItemTitle from './components/ItemTitle'
import Segment from './components/Segment'
import Table from './components/Table'
import TD from './components/Table/components/TD'
import TH from './components/Table/components/TH'
import TR from './components/Table/components/TR'
import './style.scss'

function Units () {
  return (
    <div>
      <ItemTitle value={'Ages'}></ItemTitle>
      <Segment items={segments}></Segment>
      <ItemTitle value={'Costs'}></ItemTitle>
      <CostFilter></CostFilter>
      <CostFilter></CostFilter>
      <CostFilter></CostFilter>
      <ItemTitle value={'Result'}></ItemTitle>
      <Table className="result-table">
        <TR>
          <TH title='sadasdsad'></TH>
          <TH title='sadasdsad'></TH>
          <TH title='sadasdsad'></TH>
        </TR>
        <TR>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
        </TR>
        <TR>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
        </TR>
      </Table>
    </div>
  )
}

export default Units
