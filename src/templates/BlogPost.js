import React from "react"
import Layout from "../Layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import "../Style/PostLook.scss"
import Img from "gatsby-image"
const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  console.log(query.mdx)
  console.log("sus e data222")
  return (
    <Layout>
      <div className="LateralBarPost WidthCenterPost">
        <div className=" blogPost">
          <div className="Cover">
            <div className="pagination">Proiecte > Voluntariat > etc</div>
            <div className="Post">
              <div className="data">{frontmatter.date}</div>
              <div className="CoverPhoto">
                <Img
                  fluid={frontmatter.cover.childImageSharp.fluid}
                  style={{ width: "100%", height: "100%" }}
                  objectFit="cover"
                  objectPosition="bottom left"
                />
              </div>
            </div>
            <div className="Tittle">
              <h1>{frontmatter.title}</h1>
            </div>

            <div className="what">
              <p>
                <MDXRenderer>{body}</MDXRenderer>
              </p>
            </div>
            <div className="LineSeparation"></div>
            <div className="Author">
              Autor: <span>{frontmatter.author}</span>
            </div>
          </div>
        </div>
        <div className="LateralBar">
          <div className="SubLateralBar">
            <div className="CategoryBar">
              <div className="CategoryTittle">CATEGORII</div>
              <div className="LineSeparation"></div>
              <div className="CategoryList">
                <ul>
                  <li>Categoria1</li>
                  <li>Categoria2</li>
                </ul>
              </div>
            </div>
            <div className="CategoryBar">
              <div className="CategoryTittle">VOLTIN PE FACEBOOK</div>
              <div className="LineSeparation"></div>
              <div className="facebook"></div>
            </div>
            <div className="CategoryBar">
              <div className="CategoryTittle">Articole Recente</div>
              <div className="LineSeparation"></div>
              <div className="CategoryList">
                <ul className="listStyleNone">
                  <li>Categoria1</li>
                  <li>Categoria2</li>
                  <li>Categoria1</li>
                  <li>Categoria2</li>
                  <li>Categoria1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      id
      body
      slug
      frontmatter {
        title
        author
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "DD MMMM YYYY", locale: "ro")
      }
    }
  }
`
export default BlogPost
