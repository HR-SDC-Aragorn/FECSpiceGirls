import React from 'react';
// import Overview from './Overview';
// eslint-disable-next-line import/no-unresolved, import/extensions
import QA from './QA/index.jsx';
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
        <QA />
        {/* <Overview />
        <QA />
        <RatingsAndReviews />
        <RelatedItems /> */}

      </div>
    );
  }
}

export default App;
