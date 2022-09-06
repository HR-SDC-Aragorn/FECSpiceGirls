/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';
import AnswerForm from './AnswerForm.jsx';

const AddAnswer = ({ question, product_id, product_name }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button className="yes" onClick={() => { setIsClicked(true); }}>
        Add Answer
      </button>
      {isClicked
        ? (
          <AnswerForm
            clicked={isClicked}
            closeForm={() => { setIsClicked(false); }}
            question={question}
            product_id={product_id}
            product_name={product_name}
          />
        )
        : null}
    </div>
  );
};

export default AddAnswer;
