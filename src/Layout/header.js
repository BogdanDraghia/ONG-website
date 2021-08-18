import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import "../Style/header.scss"
import logo from "../../static/images/logo.png"
const Header = () => {
  const outsideDropdown = useRef()

  const [open, setOpen] = useState(false)
  const [eventTARGET, SETEVENTTARGET] = useState([])
  if (open === true) {
    console.log("true")
  }

  useEffect(() => {
    const OnEventClick = event => {
      SETEVENTTARGET(event.target.id)
      if (
        outsideDropdown.current.contains(event.target) &&
        eventTARGET === event.target.id
      ) {
        return console.log(event.target)
      }
      SETEVENTTARGET(event.target.id)
      setOpen(false)
    }

    document.body.addEventListener("click", OnEventClick)

    return () => {
      document.body.removeEventListener("click", OnEventClick)
    }
  }, [])

  const showdropdown = event => {
    setOpen(!open)

    console.log(eventTARGET)
  }

  return (
    <header>
      <div className="ContainerNav WidthCenter">
        <div className="logoNavBar">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigation">
          <ul className="Navigation-Items">
            <li
              id="dropdown1"
              className="haveDropdown1"
              onClick={showdropdown}
              ref={outsideDropdown}
            >
              <Link to="/" className="Nav no-decoration  ">
                Proiecte
              </Link>
              <ul
                className={
                  eventTARGET === "dropdown1" ? "dropdownTrue" : "dropdownFalse"
                }
              >
                <li>Solidaritate pentru un viitor mai curat</li>
                <li>Dependent de libertate</li>
                <li>Voluntariatul o solutie la violenta</li>
              </ul>
            </li>
            <li>
              <Link to="/" className="Nav no-decoration">
                TEST2
              </Link>
            </li>
            <li id="dropdown2" onClick={showdropdown} ref={outsideDropdown}>
              <Link to="/" className="Nav no-decoration ">
                Despree
              </Link>
              <ul
                className={
                  eventTARGET === "dropdown2" ? "dropdownTrue" : "dropdownFalse"
                }
              >
                <li>Solidaritate pentru un viitor mai curat</li>
                <li>Dependent de libertate</li>
                <li>Voluntariatul o solutie la violenta</li>
              </ul>
            </li>
            <li>
              <Link to="/" className="Nav no-decoration contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
