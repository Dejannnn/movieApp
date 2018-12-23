import React, { Component } from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import MoviesResult from './MoviesResult'
import MoviesFavouriteList from './MoviesFavouriteList'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
class App extends Component {

  render() {
    return (


      <div className="container">
          <div className="row">
              <Jumbotron>
                  <h1>Hello, world!</h1>
                  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <p><Button bsStyle="primary">Learn more</Button></p>
              </Jumbotron>
          </div>
          <div className="row">
              <Router>
                  <Switch>
                      <Route exact path='/' component={MoviesResult} />
                      <Route path='/fav' component={MoviesFavouriteList} />
                  </Switch>
              </Router>


          </div>

      </div>
    );
  }
}

export default App;
