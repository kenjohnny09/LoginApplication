import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../components/Home'
import UserList from './../components/User/UserList'
import UserForm from './../components/User/UserForm'
import Login from './../components/Login/Login'

const RouteContainer = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={UserList}/>
            <Route exact path='/users/create' component={UserForm}/>
            <Route exact path='/users/:id' component={UserForm}/>
            <Route exact path='/login' component={Login} />
        </Switch>
    </main>
)

export default RouteContainer