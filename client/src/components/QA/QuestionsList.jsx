import React from 'react';
import { useState, useEffect } from 'react';
import QuestionsListEntry from './QuestionsListEntry.jsx';
import AddQuestions from './AddQuestions.jsx';
import AnswerList from './AnswerList.jsx';
// import AnswerListEntry from './AnswerListEntry';

// eslint-disable-next-line react/function-component-definition
const QuestionsList = ({ questions }) => {
  const [count, setCount] = useState(2);

  return (
    <div>
      <div id="qaContainer">
        {questions.results?.slice(0, count).map((question) =>
          <div>
            <QuestionsListEntry key={question.question_id} question={question} />
            <AnswerList question={question}/>
          </div>
        )}
      </div>
      <div id="qListButtons">
        <button className="moreQs" type="button" onClick={() => setCount(count + 2)}>
          MORE ANSWERED QUESTIONS
        </button>
        <AddQuestions />
      </div>
    </div>
  )
};

export default QuestionsList;
