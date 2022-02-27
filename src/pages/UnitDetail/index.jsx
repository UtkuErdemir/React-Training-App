import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { changeAppTitle } from '../../utils/helpers'
import Table from '../../components/Table'
import TD from '../../components/Table/components/TD'
import TR from '../../components/Table/components/TR'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUnits } from '../../store/units/unitsActions'

function UnitDetail () {
  const { data: units } = useSelector(state => state.units)
  const params = useParams()
  const id = params.id || ''
  const selectedUnit = findSelectedUnitById(id, units)
  const dispatch = useDispatch()
  changeAppTitle('Unit Details')

  useEffect(() => {
    if (units.length === 0) { dispatch(getAllUnits()) }
  }, [])
  return (
    <div>
      {units.length > 0 && <Table>
        <TR onPress={() => alert(id)}>
          <TD title='ID:'></TD>
          <TD title={selectedUnit.id.toString()}></TD>
        </TR>
        <TR>
          <TD title='Name:'></TD>
          <TD title={selectedUnit.name}></TD>
        </TR>
        <TR>
          <TD title='Description:'></TD>
          <TD title={selectedUnit.description}></TD>
        </TR>
        <TR>
          <TD title='Min. Age:'></TD>
          <TD title={selectedUnit.age}></TD>
        </TR>
        <TR>
          <TD title='Wood Cost:'></TD>
          <TD title={selectedUnit.cost.Wood?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Food Cost:'></TD>
          <TD title={selectedUnit.cost.Food?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Gold Cost:'></TD>
          <TD title={selectedUnit.cost.Gold?.toString()}></TD>
        </TR>
        <TR>
          <TD title='Build Time:'></TD>
          <TD title={selectedUnit.build_time.toString()}></TD>
        </TR>
        <TR>
          <TD title='Reload Time:'></TD>
          <TD title={selectedUnit.reload_time.toString()}></TD>
        </TR>
        <TR>
          <TD title='Hit Points:'></TD>
          <TD title={selectedUnit.hit_points.toString()}></TD>
        </TR>
        <TR>
          <TD title='Attack:'></TD>
          <TD title={selectedUnit.attack.toString()}></TD>
        </TR>
        <TR>
          <TD title='Accuracy:'></TD>
          <TD title={selectedUnit.accuracy.toString()}></TD>
        </TR>
      </Table>}
    </div>
  )
}

const findSelectedUnitById = (id, units) => units.find(unit => unit.id === parseInt(id))

export default UnitDetail
