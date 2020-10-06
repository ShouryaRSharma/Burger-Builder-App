import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Layout from './components/UI/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import 'bootstrap/dist/js/bootstrap.bundle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
          <Checkout />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
