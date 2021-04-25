import React from 'react'
import { Link } from 'gatsby'
import MobileMenu from './MobileMenu'
import Links from './Links'
import Container from '../Container'

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <Link className="header-link" to="/">
            <div>
              <img
                  src={""}
                  width="40"
                  height="40"
                  alt="Lorenzo Bernaschina's logo"
                  style={{
                    marginBottom: "0px"
                  }}/>
              <div className="website-name">
                  ittaboba.com
              </div>
            </div>
          </Link>
          <div className="header-links-container">
            <div className="header-links">
              <Links />
            </div>
            {/* <MobileMenu>
              <Links />
            </MobileMenu> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
