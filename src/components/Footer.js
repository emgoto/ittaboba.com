import React from 'react'
import { Twitter, GitHub, LinkedIn } from './Social'
import Container from './Container'

const Footer = () => (
  <footer>
    <Container>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <section className="footer-section">© Lorenzo Bernaschina's Website 2021</section>
        <nav>
          <Twitter />
          <LinkedIn />
          <GitHub />
        </nav>
      </div>
    </Container>
  </footer>
)

export default Footer
