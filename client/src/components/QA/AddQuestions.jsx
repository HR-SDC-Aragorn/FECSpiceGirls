import React from 'react';
import { useState, useEffect } from 'react';
import QuestionForm from './QuestionForm.jsx';

// eslint-disable-next-line react/function-component-definition
const QuestionsList = ({ product_name, product_id }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id="question-form-container">
      <button className="addQ" type="button" onClick={() => { setIsClicked(true); }}>
        ADD A QUESTION
        <img
          src="https://petersanders.com/wp-content/uploads/2021/04/free-png-plus-sign-transparent-plus-signpng-images-pluspng-plus-sign-transparent-background-512_512.png"
          alt="Add"
        />
      </button>
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
