import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from '@emotion/react'
import Seo from "../components/seo"

import components from "../components/mdx"
import Layout from "../components/Layout"
import { bpMinLG, bpMinMD, bpMinSM, bpMinXL } from "../lib/breakpoints"

export default function Post({data:{mdx}}) {
    return (
        <Layout>
            <Seo 
                title={mdx.frontmatter.title}
                description={mdx.frontmatter.description}
                image={mdx.frontmatter.banner.childImageSharp.gatsbyImageData.images.fallback.src}
                path={`/article/${mdx.frontmatter.slug}`}
                isBlogPost />
            <div>
                <GatsbyImage alt={"Hero image"} image={mdx.frontmatter.banner.childImageSharp.gatsbyImageData} />
                <div css={css`
                    padding-top: 20px;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-align: center;
                    box-sizing: border-box;
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                `}>
                <div css={css`
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 0;
                    padding-right: 0;
                    max-width: 1100px;
                `}>
                    <h1 css={css`
                        font-family: "Helvetica Neue";
                        font-weight: 600;
                        ${bpMinSM} {
                            font-size: 30px;
                        }
                        ${bpMinMD} {
                            font-size: 33px;
                        }
                        ${bpMinLG} {
                            font-size: 35px;
                        }
                        ${bpMinXL} {
                            font-size: 40px;
                        }
                    `}>{mdx.frontmatter.title}</h1>
                    <p css={css`
                        font-weight: 500;
                        ${bpMinSM} {
                            font-size: 16px;
                        }
                        ${bpMinMD} {
                            font-size: 18px;
                        }
                        ${bpMinLG} {
                            font-size: 18px;
                        }
                        ${bpMinXL} {
                            font-size: 18px;
                        }
                    `}>
                        <Link to="/">
                            {`${mdx.frontmatter.author}`}
                        </Link>
                        {` ∙ Reading time: ${mdx.timeToRead} minutes`}
                    </p>
                </div>
            </div>
            </div>
            
            <article>
                <div css={css`
                    padding: 0px 20px;
                    max-width: 750px;
                    margin-left: auto;
                    margin-right: auto;
                `}>
                    <MDXProvider components={components}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </article>
            <div style={{textAlign: "center"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    Written with <span role="img" aria-label="heart emoji">❤️</span> using my&nbsp;<Link className="GemsLink" to="https://gemsnotes.app/" target="_blank">Gems</Link>&nbsp;notes
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        description
        date
        author
        slug
        banner {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
      }
    }
  }
`