/* eslint-disable react/function-component-definition */
import React from 'react';

const AnswerList = ({ question }) => {

  const arrayOfAnswers = Object.entries(question.answers).map((answers) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    ({ [answers[0]]: answers[1] }));

  return (
    <div id="qaEntry">
      {arrayOfAnswers?.map((answer, index) => {
        for (let i in answer) {
          return (
            <div id="answer" key={index}>
              A: {answer[i].body}
            </div>
          )
        }
      })}
    </div>
  );
};

export default AnswerList;