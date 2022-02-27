import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function Table ({ children }) {
  return (
    <table className='table'>
        {children}
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.object
}

export default Table
