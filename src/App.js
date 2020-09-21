import React, { Component } from 'react';
import './App.scss';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

require('popper.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout><BurgerBuilder /></Layout>
      </div>
    );
  }
}

export default App;
