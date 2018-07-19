import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Poems from './components/Poems'
import { Provider } from 'react-redux';
import store from './store';
import PoemModal from './components/poemModal'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <PoemModal/>
          <Poems/>
        </div>
      </Provider>
    );
  }
}

export default App;
