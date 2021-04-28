import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter, GitHub, LinkedIn } from './Social'
import Container from './Container'
import { bpMaxXS } from '../lib/breakpoints'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          social {
            linkedin
            github
          }
        }
      }
    }
`)

  return <footer>
    <Container>
      <div css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}>
        <section css={css`
          font-size: 13px;
          ${bpMaxXS} {
            font-size: 10px;
          }
        `}>© Lorenzo Bernaschina's Website 2021</section>
        <nav>
          <Twitter url={data.site.siteMetadata.twitter}/>
          <LinkedIn url={data.site.siteMetadata.social.linkedin} />
          <GitHub url={data.site.siteMetadata.social.github} />
        </nav>
      </div>
    </Container>
  </footer>
}

export default Footer
