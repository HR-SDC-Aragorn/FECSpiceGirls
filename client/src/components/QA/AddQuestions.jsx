/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';
import QuestionForm from './QuestionForm.jsx';

// eslint-disable-next-line react/function-component-definition
const QuestionsList = ({ product_name, product_id }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id="question-form-container">
      <button className="addQ" type="button" onClick={() => { setIsClicked(true); }}>
        <div id="addQ-content">
          <div> ADD A QUESTION </div>
          <div id="plus"> + </div>
        </div>
      </button>
      <div>
      </div>
      {isClicked
        ? (
          <QuestionForm
            product_name={product_name}
            product_id={product_id}
            clicked={isClicked}
            closeForm={() => { setIsClicked(false); }}
          />
        )
        : null}
    </div>
  );
};

export default QuestionsList;
