/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
    };
  }

  componentDidMount() {
    axios.get('/qa/questions/65635/1/10')
      .then((response) => {
        this.setState({
          questions: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="container">
        <div id="qaTitle">
          QUESTIONS &amp; ANSWERS
        </div>
        <Search />
        <QuestionsList questions={this.state.questions} />
      </div>
    );
  }
}

export default QA;
