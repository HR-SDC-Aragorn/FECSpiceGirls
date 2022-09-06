/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/function-component-definition
const AnswerForm = ({ clicked, closeForm, product_id, product_name, question }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const photoURLs = [];

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

  const convertPhotos = (e) => {
    let photos = e.target.files;
    for (let i = 0; i < photos.length; i++) {
      photoURLs.push(URL.createObjectURL(photos[i]));
    }
  };

  const submit = (e) => {
    const data = {
      body,
      name,
      email,
      product_id: parseInt(product_id),
      photos: photoURLs,
    };

    axios.post(`/qa/questions/${question.question_id}/answers`, data)
      .then((response) => { console.log('Front end posted answer, ', response); })
      .catch((err) => {
        console.log('Error posting answer:', err);
      });
  };

  return (
    <div className="questionForm">
      <div onClick={() => {closeForm()}} className="overlay"></div>
      <div className="q-form-content">
        <h1 className="q-form-title">Submit Your Answer</h1>
        <h3 className="q-form-subtitle">{product_name}: {question.question_body}</h3>
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
              placeholder="Example: jack543!!"
              onChange={updateName}
            />
            <br />
            <small className="name-message">
              For privacy reasons, do not use your full name or email address
            </small>
          </label>
          <br />
          <label>
            <div className="required">
              Email
              <div className="ast">*</div>
            </div>
            <input
              value={email}
              type="email"
              required
              placeholder="jack@email.com"
              onChange={updateEmail}
            />
            <br />
            <small className="name-message">
              For authentication reasons, you will not be emailed
            </small>
          </label>
          <br />
          <textarea
            id="q-form-textarea"
            value={body}
            type="text"
            required
            placeholder="What is your answer?"
            onChange={updateQuestion}
          />
          <br />
          <input
            type="file"
            id="submit-img"
            accept="image/*"
            multiple
            onChange={(e) => { convertPhotos(e); }}
          />
          <button className="q-form-submit" onClick={(e) => { submit(e); }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnswerForm;
