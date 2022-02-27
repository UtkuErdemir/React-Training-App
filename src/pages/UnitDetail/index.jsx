import React from 'react'
import { useParams } from 'react-router-dom'
import Table from '../Units/components/Table'
import TD from '../Units/components/Table/components/TD'
import TR from '../Units/components/Table/components/TR'

function UnitDetail () {
  const params = useParams()
  const id = params.id || ''
  return (
    <div>
      <Table>
        <TR onPress={() => alert(id)}>
          <TD title='ID:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Name:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Description:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Min. Age:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Wood Cost:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Food Cost:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Gold Cost:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Build Time:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Reload Time:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Hit Points:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Attack:'></TD>
          <TD title=''></TD>
        </TR>
        <TR>
          <TD title='Accuracy:'></TD>
          <TD title=''></TD>
        </TR>
      </Table>
    </div>
  )
}

export default UnitDetail
