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

  handleCurrent(newId) {
    this.setState({
      currentProduct: { id: newId },
    });
  }

  render() {
    return (
      <div id="app">
        <div id="main">
          <Overview product={this.state.currentProduct} />
        </div>
        <div id="related-items">
          <RelatedItems
            currentProduct={this.state.currentProduct}
            handleCurrent={this.handleCurrent.bind(this)}
          />
        </div>
        <div id="QA">
          <QA currentProduct={this.state.currentProduct} />
        </div>
      </div>
    );
  }
}

export default App;
