import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function ItemTitle ({ value, align }) {
  const titleAlign = align || 'left'
  return (
    <h4 className='title' align={titleAlign} data-testid="title">{value}</h4>
  )
}

ItemTitle.propTypes = {
  value: PropTypes.string,
  align: PropTypes.string
}

export default ItemTitle
