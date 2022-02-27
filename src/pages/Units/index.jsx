import React from 'react'
import { useNavigate } from 'react-router-dom'
import { segments, unitResultTitles } from '../../utils/constants'
import CostFilter from './components/CostFilter'
import ItemTitle from './components/ItemTitle'
import Segment from './components/Segment'
import Table from './components/Table'
import TD from './components/Table/components/TD'
import TH from './components/Table/components/TH'
import TR from './components/Table/components/TR'
import './style.scss'

function Units () {
  const navigate = useNavigate()
  return (
    <div>
      <ItemTitle value={'Ages'}></ItemTitle>
      <Segment items={segments}></Segment>
      <ItemTitle value={'Costs'}></ItemTitle>
      <CostFilter title={'Food'}></CostFilter>
      <CostFilter title={'Wood'}></CostFilter>
      <CostFilter title={'Gold'}></CostFilter>
      <ItemTitle value={'Result'}></ItemTitle>
      <Table className="result-table">
        <TR>
          {getTableTitles()}
        </TR>
        <TR onPress={(id) => navigate(`/unit-detail/${id}`)}>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
        </TR>
        <TR>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
          <TD title='sadasdsad'></TD>
        </TR>
      </Table>
    </div>
  )
}

const getTableTitles = () => unitResultTitles.map((title, index) => <TH key={index} title={title}></TH>)

export default Units
