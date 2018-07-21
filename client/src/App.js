import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Terms from './components/Terms';
import Home from './components/Home';
import What from './components/What';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <AppNavbar/>
      <Switch>
        <Route exact path={'/what'} component={What}/>
        <Route exact path={'/terms'} component={Terms}/>
        <Route exact path={'/'} component={Home}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
