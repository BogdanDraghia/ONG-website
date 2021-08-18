import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../Style/Reset.scss"
import "../Style/layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="containerBody">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
