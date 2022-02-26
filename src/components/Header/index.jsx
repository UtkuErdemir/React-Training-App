import React from 'react'
import './header.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header ({ pageTitle }) {
  const title = pageTitle || 'React App'
  return (
    <div className="header">
        <b href="#default">{title}</b>
        <div className="header-right">
            <Link className="active" to="/">Home</Link>
            <Link to="/units">Contact</Link>
        </div>
    </div>
  )
}

Header.propTypes = {
  pageTitle: PropTypes.string
}

export default Header
