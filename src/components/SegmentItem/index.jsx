import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function SegmentItem ({ title, value, onPress, isActive }) {
  return (
    <div className={isActive ? 'segment-item-active' : 'segment-item'} onClick={() => onPress(value)} data-testid="segment-item">{title}</div>
  )
}

SegmentItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onPress: PropTypes.func,
  isActive: PropTypes.bool
}

export default SegmentItem
