import React from 'react'
import Layout from '../components/Layout'

const NotFound = () => {
  return(
    <Layout>
      <div style={{
          display: "table",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "80vh",
          margin: "0 auto",
          textAlign: "center",          
          zIndex: 1
      }}>
        <div className="not-found-div">
            <h1>404</h1>
        </div>
      </div> 
    </Layout>
  )
}
  

export default NotFound