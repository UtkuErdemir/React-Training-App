import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUnits } from '../../store/units/unitsActions'
import { segments, unitResultTitles } from '../../utils/constants'
import { changeAppTitle, costToString } from '../../utils/helpers'
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
  const [selectedItem, setSelectedItem] = useState({ ...segments[0] })
  const [costFilters, setCostFilters] = useState({})
  const addCostFilter = (filterName, value) => setCostFilters(previous => addCostFilterFn(previous, filterName, value))
  const removeCostFilter = (filterName) => setCostFilters(previous => removeFilterFn(previous, filterName))
  const units = useSelector(state => selectUnits(state, selectedItem, costFilters))

  changeAppTitle('Units')

  useEffect(() => {
    if (units?.length === 0) { dispatch(getAllUnits()) }
  }, [])
  return (
    <div>
      <ItemTitle value={'Ages'}></ItemTitle>
      <Segment onSelected={setSelectedItem} items={segments} value={selectedItem.value}></Segment>
      <ItemTitle value={'Costs'}></ItemTitle>
      <CostFilter title={'Food'} onChange={addCostFilter} removeFilter={removeCostFilter} value={costFilters.Food}></CostFilter>
      <CostFilter title={'Wood'} onChange={addCostFilter} removeFilter={removeCostFilter} value={costFilters.Wood}></CostFilter>
      <CostFilter title={'Gold'} onChange={addCostFilter} removeFilter={removeCostFilter} value={costFilters.Gold}></CostFilter>
      <ItemTitle value={'Result'}></ItemTitle>
      <Table className="result-table">
        <TR>
          {getTableTitles()}
        </TR>
        {
          units?.length > 0 && units.map(unit => (
          <TR key={unit.id} onPress={() => navigateWithId(unit.id, navigate)}>
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

const getTableTitles = () => unitResultTitles.map((title, index) => <TH key={index} title={title}></TH>)

export const addCostFilterFn = (previous, filterName, value) => {
  const temp = { ...previous }
  temp[filterName] = value
  return temp
}

export const removeFilterFn = (previous, filterName) => {
  const temp = { ...previous }
  delete temp[filterName]
  return temp
}

export const selectUnits = (state, selectedItem, costFilters) => {
  const initialData = state.units.data
  const filteredDataByAge = [...initialData].filter(data => selectedItem.value === 'all' || data.age?.toLowerCase() === selectedItem.value?.toLowerCase())
  let filteredDataByCost = [...filteredDataByAge]

  Object.entries(costFilters).forEach(([name, value]) => {
    filteredDataByCost = filteredDataByCost.filter(data => data.cost && (data.cost[name] >= value || (!data.cost[name] && value === '0')))
  })

  return filteredDataByCost
}

export const navigateWithId = (id, navigate) => navigate(`/unit-detail/${id}`)

export default Units
