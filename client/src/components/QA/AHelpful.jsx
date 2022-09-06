/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AHelpful = ({ helpfulness, answer_id }) => {
  const [upvoted, setUpvoted] = useState(false);

  const upvote = () => {
    if (!upvoted) {
      let query = {"answer_id": answer_id};
      axios.put('/answer/helpful', query)
        .then((response) => {
          console.log('Successfully upvoted answer!');
          setUpvoted(true);
        })
        .catch((err) => console.log('Error upvoting answer'));
    }
  };

  return (
    <div id="q-helpful">
      <div>
        Helpful?
      </div>
      <button className="yes" onClick={() => {upvote()}}>
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
