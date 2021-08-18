import React from "react"
import { Link } from "gatsby"
import "../Style/Gallery.scss"
import { graphql, useStaticQuery } from "gatsby"
const Gallery = ({ data }) => {
  const dataGallery = useStaticQuery(graphql`
    query Gallery {
      allCloudinaryMedia {
        totalCount
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)

  console.log(dataGallery)
  console.log("sssss")
  const images = dataGallery.allCloudinaryMedia.edges

  return (
    <div className="GalleryView">
      {images.map((image, index) => (
        <div className="singleGalleryImage" key={`${index}-image`}>
          <img src={image.node.secure_url}></img>
        </div>
      ))}
    </div>
  )
}

export default Gallery
