import React from 'react';
import Overview from './Overview';
import QA from './QA';
import RatingsAndReviews from './RatingsAndReviews';
import RelatedItems from './RelatedItems';

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
        <Overview />
        <QA />
        <RatingsAndReviews />
        <RelatedItems />

      </div>
    );
  }
}

export default App;
