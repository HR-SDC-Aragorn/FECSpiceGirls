import React from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';

// eslint-disable-next-line react/function-component-definition
const QuestionsList = ({ questions }) => (
    <div>
      <h1>QuestionsList</h1>
      {questions.results?.map((question) => <QuestionsListEntry key={question.question_id} question={question} />)}
    </div>
);

export default QuestionsList;
