import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import { Link } from "react-router-dom";


export default function Navbar(props) {
    const changeColorBlue =()=>{
        document.body.style.backgroundColor = '#055aba';
      }

      const changeColorGrey =()=>{
        document.body.style.backgroundColor = '#aaaaaa';
      }

      const changeColorGreen =()=>{
        document.body.style.backgroundColor = '	#22bb33';
      }

      const changeColorRed =()=>{
        document.body.style.backgroundColor = '#bb2124';
      }

      const changeColorYellow =()=>{
        document.body.style.backgroundColor = '#f0ad4e';
      }

      const changeColorLightBlue =()=>{
        document.body.style.backgroundColor = '#5bc0de';
      }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutUs}</Link>
        </li>
      </ul>

      <Buttons color={'primary'} changeColor={changeColorBlue} />
      <Buttons color={'secondary'} changeColor={changeColorGrey} />
      <Buttons color={'success'} changeColor={changeColorGreen} />
      <Buttons color={'danger'} changeColor={changeColorRed} />
      <Buttons color={'warning'} changeColor={changeColorYellow} />
      <Buttons color={'info'} changeColor={changeColorLightBlue} />

      <div className={`form-check form-switch text-${props.mode==='light'? 'dark': 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}


// This statement used when we give this propTypes with the props, then the content of the prop should be string only. We cannot give another data types
Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutUs: PropTypes.string.isRequired
}

// Default props : we can give default value to props
Navbar.defaultProps = {
    title: "Set title here",
    aboutUs: "About"
}