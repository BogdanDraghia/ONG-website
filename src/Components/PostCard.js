import React from "react"
import { Link } from "gatsby"
import "../Style/PostCard.scss"
import Img from "gatsby-image"
const PostCard = ({ title, date, text, link, cover }) => {
  return (
    <div class="PreBoxPost spaceBettwenComponent">
      <Link class="test2" to={`/${link}`}>
        <div class="dateBoxPost ">{date}</div>
        <div className="ShadowBoxPost">
          <div class="FotoBoxPost">
            <Img
              fluid={cover}
              style={{ width: "100%", height: "100%" }}
              objectFit="cover"
              objectPosition="bottom left"
            />
          </div>
          <div class="BoxPost">
            <div class="NumeProiectBoxPost fontsizeSubTitlu">
              "Solidaritate pentru un viitor mai curat"
            </div>
            <div class="TitluBoxPost fontsizeTitlu">{title}</div>
            <div class="TextPreviewBoxPost fontsizeSubTitlu">{text}</div>
            <div class="ZonaTagBoxPost">
              <Link to={`www.google.com`}>
                <div class="tag">Tag1</div>
              </Link>
              <div class="tag">Tag1</div>
              <div class="tag">Tag3</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
