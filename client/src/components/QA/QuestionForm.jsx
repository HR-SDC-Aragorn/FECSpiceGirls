import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/function-component-definition
const QuestionForm = ( {clicked, closeForm, product_name, product_id} ) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const updateEmail = (e) => {
    if (e.target.value.length <= 60) {
      setEmail(e.target.value);
    }
  };

  const updateName = (e) => {
    if (e.target.value.length <= 60) {
      setName(e.target.value);
    }
  };

  const updateQuestion = (e) => {
    if (e.target.value.length <= 1000) {
      setBody(e.target.value);
    }
  };

  const submit = (e) => {
    const data = {
      body,
      name,
      email,
      product_id: parseInt(product_id, 10),
    };

    axios.post('/qa/questions', data)
      .then((response) => { console.log(response); })
      .catch((err) => {
        console.log('Error posting question:', err);
      });
  };

  return (
    <div className="questionForm">
      <div onClick={() => {closeForm()}} className="overlay"></div>
      <div className="q-form-content">
        <h1 className="q-form-title">Ask Your Question</h1>
        <h3 className="q-form-subtitle">About the {product_name}</h3>
        <hr />
        <form className="q-form">
          <button className="cancel" onClick={() => { closeForm(); }}>X</button>
          <label>
            <div className="required">
              Name
              <div className="ast">*</div>
            </div>
            <input
              value={name}
              type="text"
              required
              placeholder="Example: jackson11!"
              onChange={updateName}
            />
            <br/>
            <small className="name-message">
              For privacy reasons, do not use your full name or email address
            </small>
          </label>
          <br/>
          <label>
            <div className="required">
              Email
              <div className="ast">*</div>
            </div>
            <input
              value={email}
              type="email"
              required
              placeholder="Why did you like the product or not?”"
              onChange={updateEmail}
            />
            <br/>
            <small className="name-message">
              For authentication reasons, you will not be emailed
            </small>
          </label>
          <br/>
          <textarea
            id="q-form-textarea"
            value={body}
            type="text"
            required
            placeholder="What is your question?"
            onChange={updateQuestion}
          />
          <br/>
          <button className="q-form-submit"  onClick={(e) => submit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
