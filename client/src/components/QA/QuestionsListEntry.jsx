/* eslint-disable react/function-component-definition */
import React from 'react';

const QuestionsListEntry = ({ question }) => {

  return (
    <div id="question">
      Q: {question.question_body}
    </div>
  );
};

export default QuestionsListEntry;
