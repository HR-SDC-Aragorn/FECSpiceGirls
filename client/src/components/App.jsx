/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import config from '../../../config.js';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => (
        this.setState({
          products: response.data,
        })
      ))
      .catch((err) => (
        console.log('error getting', err)
      ));
  }

  render() {
    return (
      <div>
        <div id="main">
          <Overview />
        </div>
        <div>
          <h1>helloWorld!</h1>
          <QA />
        </div>
        <div>
          <RelatedItems products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
