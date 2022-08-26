import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions, import/no-unresolved
import config from '../../../config.js';
import Overview from './Overview';

// require('dotenv').config();
// eslint-disable-next-line import/no-unresolved
// import QA from './QA';
// import Overview from './Overview';
// eslint-disable-next-line import/no-unresolved, import/extensions
import QA from './QA/index.jsx';

// import RatingsAndReviews from './RatingsAndReviews';
// eslint-disable-next-line import/extensions
import RelatedItems from './RelatedItems/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
    };
  }

  componentDidMount() {
    const options = {
      method: 'get',
      url: `${config.API_HOST}products`,
      headers: {
        Authorization: config.API_KEY,
      },
    };
    axios(options)
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
          <h1 id="text">Hello World!</h1>
          <Overview />
        </div>
        <div>
          <h1>helloWorld!</h1>
          <QA />
        </div>
        {/* <Overview />
        <QA />
        <RatingsAndReviews />
        <RelatedItems /> */}
        <div>
          <RelatedItems products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
