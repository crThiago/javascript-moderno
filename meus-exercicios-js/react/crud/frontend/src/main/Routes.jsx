import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/User'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />{/*Rota para exatamente para "/" */}
        <Route path='/users' component={UserCrud} /> {/*Rota para /users*/}
        <Redirect from='*' to='/' /> {/*Redireciona para o root caso não exista*/}
    </Switch>