/* eslint-disable react/function-component-definition */
import React from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';

const QuestionsListEntry = ({ question, product_name, product_id }) => {

  return (
    <div className="question-bar">
      <div id="question">
        Q: {question.question_body}
      </div>
      <Helpful helpfulness={question.question_helpfulness}/>
      <div className="bar">|</div>
      <AddAnswer
        question={question}
        product_id={product_id}
        product_name={product_name}
      />
    </div>
  );
};

export default QuestionsListEntry;
