import React from "react"
import "../Style/static.scss"
import maini from "../../static/images/maini.png"
const Static = () => {
  return (
    <div class="Numbers-section spaceBettwenComponent">
      <div class="SubNumbers-section">
        <div class="LeftBoxNumbers ">
          <div class="Maini1"></div>
          <div class="LeftNumbers">
            <div class="Numbers2">
              <div class="ItemNumbers">
                <div class="tittleItemNumber">Proiecte</div>
                <div class="numberItemNumber">17</div>
              </div>
              <div class="ItemNumbers">
                <div class="tittleItemNumber">Angajati</div>
                <div class="numberItemNumber">4</div>
              </div>
              <div class="ItemNumbers">
                <div class="tittleItemNumber">Proiecte</div>
                <div class="numberItemNumber">17</div>
              </div>
            </div>
          </div>
        </div>

        <div class="RightBoxNumbers">
          <div class="Maini">
            <img src={maini} alt="maini" />
          </div>
          <div class="RightNumbers ">
            <div class="TittluNumbers ">Voluntari</div>
            <div class="Numbers ">100</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Static
