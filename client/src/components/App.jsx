/* eslint-disable import/extensions */
import React from 'react';
import Overview from './Overview/index.jsx';
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

  render() {
    return (
      <div>
        <h1>helloWorld!</h1>
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
