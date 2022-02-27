import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { getAllUnits } from '../../store/units/unitsActions'
import { segments, unitResultTitles } from '../../utils/constants'
import { changeAppTitle } from '../../utils/helpers'
import CostFilter from './components/CostFilter'
import ItemTitle from '../../components/ItemTitle'
import Segment from '../../components/Segment'
import Table from '../../components/Table'
import TD from '../../components/Table/components/TD'
import TH from '../../components/Table/components/TH'
import TR from '../../components/Table/components/TR'
import './style.scss'

function Units () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: units } = useSelector(state => state.units)

  changeAppTitle('Units')

  useEffect(() => {
    if (units.length === 0) { dispatch(getAllUnits()) }
  }, [])
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
        {
          units.length > 0 && units.map(unit => (
          <TR key={unit.id} onPress={() => navigate(`/unit-detail/${unit.id}`)}>
            <TD title={unit.id.toString()}></TD>
            <TD title={unit.name}></TD>
            <TD title={unit.age}></TD>
            <TD title={costToString(unit.cost)}></TD>
          </TR>
          ))
        }
      </Table>
    </div>
  )
}

const costToString = (cost) => cost
  ? Object.entries(cost).map(element => `${element[0]}:${element[1]}`).join(',')
  : ''

const getTableTitles = () => unitResultTitles.map((title, index) => <TH key={index} title={title}></TH>)

export default Units
