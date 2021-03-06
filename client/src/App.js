import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Terms from './components/Terms';
import Home from './components/Home';
import What from './components/What';
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <AppNavbar/>
      <Switch>
        <Route exact path={'/www'} component={What}/>
        <Route exact path={'/tandc'} component={Terms}/>
        <Route exact path={'/'} component={Home}/>
      </Switch>
      <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
