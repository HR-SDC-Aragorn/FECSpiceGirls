import React from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import AddQuestions from './AddQuestions.jsx';

// eslint-disable-next-line react/function-component-definition
const QuestionsList = ({ questions }) => (
  <div>
    <div>
      {questions.results?.map((question) => <QuestionsListEntry key={question.question_id} question={question} />)}
    </div>
    <div id="qListButtons">
      <button className="moreQs" type="button">
        MORE ANSWERED QUESTIONS
      </button>
      <AddQuestions />
    </div>
  </div>

);

export default QuestionsList;
