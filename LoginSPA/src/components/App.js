import React, { Component } from 'react'
import Routes from './../routes'
import { Switch, Link } from 'react-router-dom'
import Header from './Header/Header'

class AppContainer extends Component {
  render() {
    return (
            <div className="container">
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