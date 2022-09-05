/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

const AnswerListEntry = ({ answer }) => {
  return (
    <div>
      <div className="answer-body">
        <div>
          {answer.body}
        </div>
      </div>
      <div className="answer-pics">
        {answer.photos.map((url) => {
          return <img id={url} src={url} alt="error" />
        })}
      </div>
      <div className="answer-data">
        <div id="answer-username">
          by {answer.answerer_name}, {answer.date}
        </div>
        <div className="bar">|</div>
        <div id="answer-helpfulness">
          Helpful? Yes &#40;{answer.helpfulness}&#41;
        </div>
        <div className="bar">|</div>
        <div id="report-answer">
          Report
        </div>
      </div>
    </div>
  );
};

export default AnswerListEntry;
