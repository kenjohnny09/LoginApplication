import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class HeaderContainer extends Component {
  render() {
    return (
            <div>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/login">Log-out</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/users">Users</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
    )
  }
}

export default HeaderContainer