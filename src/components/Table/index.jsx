import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Table ({ children }) {
  return (
    <table className='table'>
      <tbody>
      {children}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.array
}

export default Table
