import React from 'react'
import Layout from '../components/Layout'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import Container from '../components/Container'
import Cards from '../components/Cards'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const Hero = () => {
  const colors = [
    '#EC331B',
    '#FF9728',
    '#FFD000',
    '#7ED321',
    '#17B9B8',
    '#007bff',
    '#7A3FBB'
  ]

  return (
    <section className="index-hero-section">
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          display: "table", 
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          textAlign: "center",
          zIndex: 1
        }}>
            <div className="index-hero">
                <span>Hello, I am&nbsp;</span>
                <span className="index-hero-span">
                    <TypistLoop interval={200}>
                        {
                            [
                                'Lorenzo',
                                'a software engineer',
                                'writing words and code',
                                'a full stack developer',
                                'an athlete',
                                'italian',
                                'learning AI'
                            ].map((text, i) => (
                                <Typist key={text}>
                                    <span style={{color: colors[i]}}>{text}</span>
                                    <Typist.Backspace count={text.length} delay={1500} />
                                </Typist> 
                            ))
                        }
                    </TypistLoop>
                </span>
            </div>
          </div>
      </div>
      <div style={{
        height: "200px",
        overflow: "hidden"
      }}
      />
    </section>
  )
}

export default function Index({data}) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <Seo />
      <Hero />
      <div style={{
        paddingBottom: "0px"
      }}
      >
        <p style={{
          maxWidth: "750px",
          margin: "0 auto",
          padding: "20px",
          fontSize: "20px",
          lineHeight: "1.6"
        }}>
            Hello, I am <Link to="/about">Lorenzo</Link>.
            I've been writing code for over 10 years (professionally for three and a half of those).
            Recently, I've started writing about systematic creativity, ethical technology, and personal growth too.
            I am bootstrapping a SaaS called <Link to="https://gemsnotes.app/" target="_blank" rel="noopener noreferrer">Gems</Link> to deal with information overload.
            I like learning and building in public by sharing my <Link to="/blog">discoveries</Link> and <Link to="/projects">side-projects</Link>.
        </p>
        <Container>
          <h1>
            Latest articles
          </h1>
          <Cards items={posts.filter((p, i) => i < 3)} />
        </Container>
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
  query home {
    allMdx(
      filter: {frontmatter: {type: { ne: "about" } } }
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
            banner {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`