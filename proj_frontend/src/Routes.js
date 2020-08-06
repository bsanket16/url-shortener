import React from 'react'
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'


import Home from './core/Home'
import Login from './user/Login'
import Signup from './user/Signup'
import Dashboard from './user/Dashboard'

import PrivateRoutes from './auth/PrivateRoutes'

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/login' exact component={ Login } />
                <Route path='/signup' exact component={ Signup } />
                <PrivateRoutes path='/dashboard' exact component={ Dashboard } />
            </Switch>
        </HashRouter>
    )
}

export default Routes
