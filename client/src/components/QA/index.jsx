/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

const QA = ({ currentProduct }) => {
  const [productId, setProductId] = useState(65631);
  const [questions, setQuestions] = useState([]);
  const [questionCache, setQuestionCache] = useState([]);

  useEffect(() => {
    if (currentProduct) {
      // fetchQuestions();
      axios.get(`/qa/questions/${currentProduct.id}/1/100`)
        .then((response) => {
          setProductId(response.data.product_id);
          setQuestions(response.data.results);
          setQuestionCache(response.data.results);
        })
        .catch((err) => {
          console.log('Error getting data from QA', err);
        });
    }
  }, [currentProduct]);

  if (currentProduct && questionCache) {
    return (
      <div id="container">
        <div id="qaTitle">
          QUESTIONS &amp; ANSWERS
        </div>
        <Search
          questions={questions}
          setQuestions={setQuestions}
          questionCache={questionCache}
        />
        <QuestionsList
          currentProduct={currentProduct}
          productId={productId}
          questions={questions}
        />
      </div>
    );
  }
};

export default QA;
