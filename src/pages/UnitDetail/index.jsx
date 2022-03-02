import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { changeAppTitle } from '../../utils/helpers'
import Table from '../../components/Table'
import TD from '../../components/Table/components/TD'
import TR from '../../components/Table/components/TR'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUnits } from '../../store/units/unitsActions'

function UnitDetail () {
  const params = useParams()
  const id = params.id || ''
  const unit = useSelector(state => {
    const initalUnits = state.units.data
    const selectedUnit = findSelectedUnitById(id, initalUnits)
    return selectedUnit
  })
  const dispatch = useDispatch()
  changeAppTitle('Unit Details')

  useEffect(() => {
    if (!unit) { dispatch(getAllUnits()) }
  }, [])
  return (
    <div>
      {unit &&
      <Table>
        <TR>
          <TD title='ID:'></TD>
          <TD title={unit.id.toString()}></TD>
        </TR>
        <TR>
          <TD title='Name:'></TD>
          <TD title={unit.name}></TD>
        </TR>
        <TR>
          <TD title='Description:'></TD>
          <TD title={unit.description}></TD>
        </TR>
        <TR>
          <TD title='Min. Age:'></TD>
          <TD title={unit.age}></TD>
        </TR>
        <TR>
          <TD title='Wood Cost:'></TD>
          <TD title={unit.cost.Wood?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Food Cost:'></TD>
          <TD title={unit.cost.Food?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Gold Cost:'></TD>
          <TD title={unit.cost.Gold?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Build Time:'></TD>
          <TD title={unit.build_time?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Reload Time:'></TD>
          <TD title={unit.reload_time?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Hit Points:'></TD>
          <TD title={unit.hit_points?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Attack:'></TD>
          <TD title={unit.attack?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Accuracy:'></TD>
          <TD title={unit.accuracy?.toString()}></TD>
        </TR>
      </Table>
      }
    </div>
  )
}

const findSelectedUnitById = (id, units) => units.find(unit => unit.id === parseInt(id))

export default UnitDetail
