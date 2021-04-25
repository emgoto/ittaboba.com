import React from 'react'
import { Link } from 'gatsby'
import ThemeToggler from './ThemeToggler'

const Links = () => {
  return (
    <React.Fragment>
      <Link style={{
        fontWeight: "bold"
      }} to="/blog" aria-label="View blog page">
        Blog
      </Link>
      <Link style={{
        fontWeight: "bold"
      }} to="/projects" aria-label="View blog page">
        Projects
      </Link>
      <Link style={{
        fontWeight: "bold"
      }} to="/about" aria-label="View blog page">
        About
      </Link>

      <ThemeToggler />
    </React.Fragment>
  )
}

export default Links