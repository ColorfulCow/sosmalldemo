/**
 * Created by colorfulcow on 16/1/8.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Header, Step, Story, Home, LifeBoard, WithPhoto } from './components/index'

export default function Routes(){
  return (
    <Route path='/' component={Header}>
      <IndexRoute component={Home} />
      <Route path='story' component={Story}/>
      <Route path='step' component={Step}/>
      <Route path='lifeBoard' component={LifeBoard}/>
      <Route path='withPhoto' component={WithPhoto}/>
    </Route>
  )
}

