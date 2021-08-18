import React from "react"
import Layout from "../Layout/layout"
import PostCard from "../Components/PostCard"
import Landing from "../Components/Landing"
import Partenerships from "../Components/Partenerships"
import { graphql, useStaticQuery } from "gatsby"
import Statics from "../Components/Statics"
import "../Style/layout.scss"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query test {
      allMdx {
        nodes {
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "MMM do YY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1600, srcSetBreakpoints: [767, 1028]) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          id
          slug
        }
        totalCount
      }

      allFile(filter: { relativeDirectory: { eq: "ContentWebsite/Colab" } }) {
        nodes {
          id
          relativePath
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  console.log(data.Myquery)
  console.log("sus e data")
  return (
    <Layout>
      <Landing></Landing>
      <Statics></Statics>
      <div className="WidthCenter middleflex spaceBettwenComponent">
        <div className="tittluContent">Utimele activitati</div>
        <div
          className="postcardsection
        gridFlex"
        >
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
            <PostCard
              link={slug}
              key={id}
              cover={frontmatter.cover.childImageSharp.fluid}
              title={frontmatter.title}
              date={frontmatter.date}
              text={excerpt}
            />
          ))}
        </div>
      </div>

      <Partenerships />
    </Layout>
  )
}

console.log("sus e data")
export default IndexPage
