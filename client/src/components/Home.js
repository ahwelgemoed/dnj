import React, { Component } from 'react';
import Poems from './Poems'
import { Provider } from 'react-redux';
import store from '../store';
import PoemModal from './poemModal'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <div className="App">
          <PoemModal/>
          <Poems/>
        </div>
      </Provider>
      </div>
    )
  }
}
