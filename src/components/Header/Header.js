import React, { Component } from 'react'
import './Header.css';
 
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  render() {
    return (
      <div className="header">
           <nav>
               <a href="/users">All Users</a>
               <a href="/manage">Manage Users</a>
               <a href="/about">About</a>
               <a href="/contact">Contact</a>
           </nav>
        </div>
    )
  }
}
 
export default Header;