import React, { Component } from 'react'
import Routes from './../routes'
import { Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class AppContainer extends Component {
  render() {
    return (
            <div className="container">
                    <div>
                        <Navbar>
                            <Nav>
                                <NavItem eventKey={1}>
                                    <Link to="/">Home</Link>
                                </NavItem>
                                <NavItem eventKey={2}>
                                    <Link to="/users">Users</Link>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                    <div>
                        <Switch>
                            <Routes />
                        </Switch>
                    </div>
            </div>
    )
  }
}

export default AppContainer