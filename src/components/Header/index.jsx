import React from 'react'
import './header.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import routes from '../../utils/routes'

function Header ({ pageTitle, selectedPath }) {
  const title = pageTitle || 'React App'
  return (
    <div className="header">
        <b>{title}</b>
        <div className="header-right">
            {
                generateLinks(selectedPath)
            }
        </div>
    </div>
  )
}

const generateLinks = (selectedPath) =>
  routes.map(({ path, name }) => <Link key={path} className={selectedPath === path ? 'active' : ''} to={path} data-testid="link">{name}</Link>)

Header.propTypes = {
  pageTitle: PropTypes.string,
  selectedPath: PropTypes.string
}

export default Header
