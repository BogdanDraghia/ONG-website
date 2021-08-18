import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../Style/partenerships.scss"
import Img from "gatsby-image"
const Partenerships = () => {
  const data2 = useStaticQuery(graphql`
    query colab {
      allFile(filter: { relativeDirectory: { eq: "ContentWebsite/Colab" } }) {
        nodes {
          id
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `)
  console.log(data2.allFile.nodes[0].childImageSharp.fluid)
  return (
    <div class="Partenerships-section WidthCenter spaceBettwenComponent">
      <div className="ColabText">
        <div className="tittleColab">Colaboratori</div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div class="Colab-Box">
        {data2.allFile.nodes.map(({ name, childImageSharp }) => (
          <div className="Colab-Item">
            <div className="imageColab">
              <Img
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "contain" }}
                fluid={childImageSharp.fluid}
              />
            </div>
            <div className="nameColab">
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partenerships
