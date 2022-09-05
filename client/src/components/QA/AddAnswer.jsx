/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';
import AnswerForm from './AnswerForm.jsx';

const AddAnswer = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button className="yes">
        Add Answer
      </button>
    </div>
  );
};

export default AddAnswer;
