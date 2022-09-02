/* eslint-disable react/function-component-definition */
import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ question }) => {

  const arrayOfAnswers = Object.entries(question.answers).map((answers) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    ({ [answers[0]]: answers[1] }));

  return (
    <div id="answer-container">
      <div id="A">
        A:
      </div>
      {arrayOfAnswers?.map((answer) => {
        for(let i in answer) {
          return <AnswerListEntry key={i} answer={answer[i]}/>
        }
      })}
    </div>
  );
};

export default AnswerList;