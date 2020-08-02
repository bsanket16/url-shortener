import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './core/Home'
import Login from './user/Login'
import Signup from './user/Signup'
import Dashboard from './user/Dashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/login' exact component={ Login } />
                <Route path='/signup' exact component={ Signup } />
                <Route path='/dashboard' exact component={ Dashboard } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
