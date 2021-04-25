import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Header from './Header'
import Footer from '../components/Footer'


const Layout = ({
  children
}) => {
  
  return (
    <Fragment>
      <div style = {{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh"
      }}>
        <Header />
          <div style={{
            marginTop: "80px"
          }}>
            {children}
            <Footer />
          </div>
      </div>
    </Fragment>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
    }
  }
`

export default Layout