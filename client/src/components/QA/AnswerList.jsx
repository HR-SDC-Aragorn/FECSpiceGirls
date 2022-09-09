/* eslint-disable react/function-component-definition */
import React from 'react';
import { useEffect, useState } from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

const AnswerList = ({ question }) => {
  const [count, setCount] = useState(2);

  const arrayOfAnswers = Object.values(question.answers).sort((a, b) => {
    b.helpfulness - a.helpfulness
  });

  const accordian = (e) => {
    if (e.target.innerHTML === 'LOAD MORE ANSWERS') {
      e.target.innerHTML = 'COLLAPSE ANSWERS';
    } else {
      e.target.innerHTML = 'LOAD MORE ANSWERS';
    }

    if (count > 2) {
      setCount(2);
    } else {
      setCount(arrayOfAnswers.length);
    }
  };

  return (
    <div id="answer-container">
      {/* <div id="A">
        A:
      </div> */}
      {arrayOfAnswers?.slice(0, count).map((answer) => {
        return <AnswerListEntry answer={answer} />
      })}
      {arrayOfAnswers.length > 2 ?
        <div>
          <div id="more-answers" type="button" onClick={(e) => accordian(e)}>
            LOAD MORE ANSWERS
          </div>
        </div>
      :null
      }
    </div>
  );
};

export default AnswerList;