import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import TBODY from './components/TBODY'

function Table ({ children }) {
  return (
    <table className='table'>
      <TBODY>
      {children}
      </TBODY>
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.array
}

export default Table
