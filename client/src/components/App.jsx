import React from 'react';
// import Overview from './Overview';
// eslint-disable-next-line import/no-unresolved
// import QA from './QA';
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

  render() {
    return (
      <div>
        <h1>helloWorld!</h1>
        {/* <Overview />
        <QA />
        <RatingsAndReviews />
        <RelatedItems /> */}
        <div>
          <RelatedItems />
        </div>
      </div>
    );
  }
}

export default App;
