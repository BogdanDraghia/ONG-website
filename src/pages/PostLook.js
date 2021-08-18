import React from "react"
import Layout from "../Layout/layout"

import "../Style/PostLook.scss"
const PostLook = () => {
  return (
    <Layout>
      <div className="WidthCenterPost ">
        <div className="pagination">Proiecte>Voluntariat>etc</div>
        <div className="Post">
          <div className="data">Data:08/10/2019</div>
          <div className="CoverPhoto"></div>
          <div className="Tittle">
            <h1>Tutunul distruge inimi</h1>
          </div>
          <div className="">
            <p>
              Ziua Naţională fără Tutun este marcată, în fiecare an, în a treia
              joi din luna noiembrie, printr-o iniţiativă menită de a atrage
              atenţia asupra impactului pe care îl are fumatul asupra sănătăţii.
              Anul acesta, Ziua Națională Fără Tutun, are ca temă ”Tutunul
              distruge inimi. Alege sănătatea! ”.
              <br /> Obiectivul temei este dedicat asocierii între consumul
              tutunului și bolile cardiovasculare. Voluntarii sev împreună cu
              voluntarii voltin au fost alături de Centrul Antidrog în campania
              de informare, sensibilizare şi conştientizare a comunitații cu
              privire la riscurile consumului de tutun precum şi de formare de
              abilităţi de viață sănătoasă.
            </p>
          </div>
          <div className="Author">by Bogdan Cristian</div>
        </div>
      </div>
    </Layout>
  )
}

export default PostLook
