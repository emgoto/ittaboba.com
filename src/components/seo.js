import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import config from '../../../config/website'

const Seo = ({ title, description, image, path, isBlogPost }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
            }
          }
        }
      }
    `}
      render={({ site: { siteMetadata: seo } }) => {
        const canonical = path ? seo.canonicalUrl + path : seo.canonicalUrl
        return (
          <React.Fragment>
            <Helmet>
              {/* General tags */}
              <html lang="en"></html>
              <title>{title}</title>

              <link rel="canonical" key={canonical} href={canonical} data-react-helmet="true" />

              <meta name="description" content={description} />
              <meta name="image" content={`${seo.canonicalUrl}${image}`} />

              {/* OpenGraph tags */}
              <meta property="og:url" content={canonical} />
              {isBlogPost ? <meta property="og:type" content="article" /> : null}
              <meta property="og:site_name" content={seo.title} />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={`${seo.canonicalUrl}${image}`} />

              {/* Twitter Card tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content={seo.social.twitter} />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={`${seo.canonicalUrl}${image}`} />
            </Helmet>
          </React.Fragment>
        )
      }
    }
  />
)

Seo.propTypes = {
  isBlogPost: PropTypes.bool,
  title: PropTypes.string, 
  description: PropTypes.string, 
  image: PropTypes.string, 
}

Seo.defaultProps = {
  isBlogPost: false,
  title: config.siteTitle,
  description: config.siteDescription,
  image: config.siteImage
}

export default Seo
