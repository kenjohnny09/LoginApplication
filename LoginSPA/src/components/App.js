import React, { Component } from 'react'
import Routes from './../routes'
import { Switch } from 'react-router-dom'

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