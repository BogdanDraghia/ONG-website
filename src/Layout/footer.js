import React from "react"

import "../Style/footer.scss"
import Logo from "../../static/images/logo.png"
const Footer = () => {
  return (
    <footer>
      <div className="ContentFooter">
        <div className="SubContentFooter WidthCenter">
          <div className="LogoFooter">
            <img src={Logo} alt="logo" />
          </div>
          <div className="ResumeFooter">
            <div className="tittlu">Mapa site</div>
            <div className="FlexFooter">
              <ul>
                <li>Link</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
              <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </div>
          </div>
          <div className="ContactFooter">
            <div className="tittlu">Contact</div>

            <ul>
              <li>641222112</li>
              <li>Email@gmail.com</li>
            </ul>
            <div className="tittlu">Social media</div>
            <div className="socialmedia">
              <div className="socialmediaitem"></div>
              <div className="socialmediaitem"></div>
              <div className="socialmediaitem"></div>
              <div className="socialmediaitem"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="SmallFooter"></div>
    </footer>
  )
}

export default Footer
