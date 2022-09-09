/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const QHelpful = ({ helpfulness, question_id }) => {
  const [upvoted, setUpvoted] = useState(false);

  const upvote = () => {
    if (!upvoted) {
      let query = {"question_id": question_id};
      axios.put('/question/helpful', query)
        .then((response) => {
          console.log('Successfully upvoted  question!');
          setUpvoted(true);
        })
        .catch((err) => console.log('Error upvoting question'));
    }
  };

  return (
    <div id="q-helpful">
      <div>
        Helpful?
      </div>
      <div className="yes" onClick={() => {upvote()}}>
        Yes
      </div>
      {upvoted
        ? <div>&#40;{helpfulness + 1}&#41;</div>
        : <div>&#40;{helpfulness}&#41;</div>
      }
    </div>
  );
};

export default QHelpful;
