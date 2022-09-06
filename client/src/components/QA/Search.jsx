/* eslint-disable react/function-component-definition */
import React from 'react';
import { useState } from 'react';

const Search = ({ questions, setQuestions, questionCache }) => {
  const [searchQuestion, setSearchQuestion] = useState('');

  const updateQuestion = (e) => {
    e.preventDefault();
    setSearchQuestion(e.target.value);
    if (searchQuestion.length >= 2) {
      setQuestions(questions.filter((q) => q.question_body.includes(searchQuestion)));
    } else {
      setQuestions(questionCache);
    }
  };

  return (
    <div id="search-bar">
      <form className="search-bar-form">
        <input
          type="search"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          className="search-bar-field"
          onChange={(e) => { updateQuestion(e); }}
        />
        <button type="submit" className="search-bar-button">
          <img src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png" alt="Search!!!" />
        </button>
      </form>
    </div>
  );
};

export default Search;
