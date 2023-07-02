import React, { Component } from 'react'
import NavbarSCSS from "./navbar.module.scss"

export default class Navbar extends Component {
  render() {
    return (
      <div className={NavbarSCSS.navbar}>
        <h2>Vidly</h2>
        <span className={NavbarSCSS.login} style={{cursor: "pointer"}}>Login</span>
        <span className={NavbarSCSS.register} style={{cursor: "pointer"}}>Register</span>
      </div>
    )
  }
}
