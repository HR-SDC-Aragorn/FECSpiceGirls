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
import { useState } from 'react';
import axios from 'axios';

const AHelpful = ({ helpfulness, answer_id }) => {
  const [upvoted, setUpvoted] = useState(false);

  const upvote = () => {
    if (!upvoted) {
      const query = { 'answer_id': answer_id };
      axios.put('/answer/helpful', query)
        .then(() => {
          console.log('Successfully upvoted answer!');
          setUpvoted(true);
        })
        .catch(() => console.log('Error upvoting answer'));
    }
  };

  return (
    <div id="q-helpful">
      <div>
        Helpful?
      </div>
      <button className="yes" onClick={() => { upvote(); }}>
        Yes
      </button>
      {upvoted
        ? <div>&#40;{helpfulness + 1}&#41;</div>
        : <div>&#40;{helpfulness}&#41;</div>
      }
    </div>
  );
};

export default AHelpful;
