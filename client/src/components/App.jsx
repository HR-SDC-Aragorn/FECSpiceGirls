/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
// import config from '../../../config.js';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import RelatedItems from './RelatedItems/index.jsx';
import Header from './Header/index.jsx';

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
    axios.get('/productid', { params: { id: newId } })
      .then((response) => (
        this.setState({
          currentProduct: response.data,
        })
      ));
  }

  render() {
    document.addEventListener('click', (e) => {
      let date = new Date();
      date = date.toString();
      const clickEvent = {
        element: e.srcElement.localName,
        widget: e.path[e.path.length - 7].id,
        time: date,
      };
      axios.post('/interactions', clickEvent)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });

    return (
      <div id="app">
        <div id="header">
          <Header />
        </div>
        <div id="overview">
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
