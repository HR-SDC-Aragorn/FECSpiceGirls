/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quote-props */
/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/function-component-definition */
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import AHelpful from './AHelpful.jsx';

const AnswerListEntry = ({ answer }) => {
  const [reported, setReported] = useState(false);

  const report = () => {
    axios.put(`/qa/answers/${answer.id}/report`)
      .then(() => { setReported(true); console.log('Reported answer'); })
      .catch((err) => { console.log('Error reporting question', err); });
  };

  return (
    <div>
      <div className="answer-body">
        <div>
          {answer.body}
        </div>
      </div>
      <div className="answer-pics">
        {answer.photos.map((url) => {
          return <img id={url} src={url} alt="error" />;
        })}
      </div>
      <div className="answer-data">
        <div id="answer-username">
          by {answer.answerer_name}, {format(parseISO(answer.date), 'MM/dd/yyyy')}
        </div>
        <div className="bar">|</div>
        <AHelpful
          helpfulness={answer.helpfulness}
          answer_id={answer.id}
        />
        <div className="bar">|</div>
        {reported
          ? <div>Reported</div>
          : <button className="report-answer" onClick={() => { report(); }}>Report</button>
        }
      </div>
    </div>
  );
};

export default AnswerListEntry;
