import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <QuestionsList />
        <Search />
      </div>
    );
  }
}

export default QA;
