import React from "react"
import Card from "./Card"
import { Link } from "gatsby"

function Cards({items}) {
    return(
        <div className="cards-div">
              {
                  items.map(({ node: post }) => {
                      return <div key={post.frontmatter.slug}>
                          <Link style={{textDecoration: 'none'}} to={`/article/${post.frontmatter.slug}`}>
                              <Card
                                title={post.frontmatter.title}  
                                preview={post.frontmatter.description}
                                image={post.frontmatter.banner.childImageSharp.gatsbyImageData} />
                          </Link>
                      </div>
                  })
              }
          </div>
    )
}

export default Cards