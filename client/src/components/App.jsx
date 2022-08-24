import React from 'react';
import Overview from './Overview';

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
      <Overview />
    );
  }
}

export default App;
