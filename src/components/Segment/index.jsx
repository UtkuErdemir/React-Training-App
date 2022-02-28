import React from 'react'
import PropTypes from 'prop-types'
import SegmentItem from '../SegmentItem'
import './style.scss'

function Segment ({ items, onSelected, value }) {
  const onPress = (selectedValue) => onSelected(items.find(item => item.value === selectedValue))
  return (
    <div className='segment-container'>
        {
            items.map(item => <SegmentItem key={item.value} title={item.title} value={item.value} onPress={onPress} isActive={item.value === value}></SegmentItem>)
        }
    </div>
  )
}

Segment.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.oneOf([PropTypes.string, PropTypes.number]), title: PropTypes.string })),
  onSelected: PropTypes.func,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}

export default Segment
