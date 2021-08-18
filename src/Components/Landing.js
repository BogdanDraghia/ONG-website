import React from "react"
import { Link } from "gatsby"
import "../Style/LandingPage.scss"
import landingpng from "../../static/images/lading.png"
const Landing = () => {
  return (
    <div className="LandingSection WidthCenter ">
      <div className="subLandingSection">
        <div className="LeftSectionLanding">
          <img src={landingpng} alt="landing welcome" />
        </div>
        <div className="RightSectionLanding">
          <div className="TitluLanding">
            Asociatia Nationala Mutuala Romania Franta "Louis Pasteur" Dej
            Filiala Braila Club VOLTIN
          </div>
          <div className="DescLanding">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </div>
          <div className="ButtonSectionLanding">
            <div className="Button1">
              <Link to={`www.google.com`}>Activitati </Link>
            </div>

            <div className="Button2">
              <Link to={`www.google.com`}>Devino voluntar ! </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
