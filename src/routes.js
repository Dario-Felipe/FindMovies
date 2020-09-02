import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import main from './pages/main/index';
import movie from './pages/movie/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = '/FindMovies' component = { main } ></Route>
      <Route path = '/FindMovies/:id' component = { movie }></Route>
    </Switch>
  </BrowserRouter>
)

export default Routes;