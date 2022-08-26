import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import config from '../../../config.js';
import Overview from './Overview';

// require('dotenv').config();
// eslint-disable-next-line import/no-unresolved
// import QA from './QA';
// import RatingsAndReviews from './RatingsAndReviews';
// import RelatedItems from './RelatedItems';

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
      <div id="main">
        <h1 id="text">Hello World!</h1>
        <Overview />
        {/* <Overview />
        <QA />
        <RatingsAndReviews />
        <RelatedItems /> */}

      </div>
    );
  }
}

export default App;
