import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sandbox from '../Sandbox'
import Home from './home/Home'
import Jokepage from './JokePage/Jokepage'
import Todo from './To-Do/ToDo'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sandbox' component={Sandbox} />
        <Route path='/قلی' component={Todo} />
        <Route path='/jokes' component={Jokepage} />
        <Route path='*' component={_404} />
      </Switch>
    </>
  )
}

export default Routes


const _404 = () => <h1>This page does not exist</h1>
