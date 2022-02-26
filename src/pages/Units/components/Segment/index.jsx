import React from 'react'
import PropTypes from 'prop-types'
import SegmentItem from '../SegmentItem'
import './style.scss'

function Segment ({ items }) {
  return (
    <div className='segment-container'>
        {
            items.map(item => <SegmentItem key={item.value} title={item.title} value={item.value}></SegmentItem>)
        }
    </div>
  )
}

Segment.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.oneOf([PropTypes.string, PropTypes.number]), title: PropTypes.string }))
}

export default Segment
