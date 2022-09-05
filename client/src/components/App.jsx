/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// import config from '../../../config.js';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      currentProduct: null,
    };
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => (
        this.setState({
          products: response.data,
          currentProduct: response.data[0],
        })
      ))
      .catch((err) => (
        console.log('ERROR GETTING PRODUCTS IN APP.JSX', err)
      ));
  }

  render() {
    return (
      <div id="app">
        <div id="main">
          <Overview product={this.state.currentProduct} />
        </div>
        <div id="QA">
          <h1>Testing1</h1>
          <QA />
        </div>
        <div id="related-items">
          <RelatedItems products={this.state.products} currentProduct={this.state.currentProduct} />
        </div>
      </div>
    );
  }
}

export default App;
