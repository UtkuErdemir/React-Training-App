import React from 'react'
import './header.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import routes from './routes'

function Header ({ pageTitle, selectedPath }) {
  const title = pageTitle || 'React App'
  return (
    <div className="header">
        <b href="#default">{title}</b>
        <div className="header-right">
            {
                generateLinks(selectedPath)
            }
        </div>
    </div>
  )
}

const generateLinks = (selectedPath) =>
  routes.map(({ path, name }) => <Link key={path} className={selectedPath === path ? 'active' : ''} to={path}>{name}</Link>)

Header.propTypes = {
  pageTitle: PropTypes.string,
  selectedPath: PropTypes.string
}

export default Header
