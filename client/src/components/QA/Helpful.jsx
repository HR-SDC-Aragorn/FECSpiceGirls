/* eslint-disable react/function-component-definition */
import React from 'react';

const Helpful = ({ helpfulness }) => {

  return (
    <div id="q-helpful">
      <div>
        Helpful?
      </div>
      <button className="yes">
        Yes
      </button>
      <div>
        &#40;{helpfulness}&#41;
      </div>
    </div>
  );
};

export default Helpful;
