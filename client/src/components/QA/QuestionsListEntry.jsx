/* eslint-disable react/function-component-definition */
import React from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';

const QuestionsListEntry = ({ question }) => {

  return (
    <div className="question-bar">
      <div id="question">
        Q: {question.question_body}
      </div>
      <Helpful helpfulness={question.question_helpfulness}/>
      <div className="bar">|</div>
      <AddAnswer />
    </div>
  );
};

export default QuestionsListEntry;
