/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
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

const cloud_name = 'spice';

// eslint-disable-next-line react/function-component-definition
const AnswerForm = ({
  closeForm, product_name, question,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState(null);

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
    e.preventDefault();

    const data = {
      body,
      name,
      email,
      photos: [],
    };

    if (photos === null) {
      console.log('Posting without pictures');
      axios.post(`/qa/questions/${question.question_id}/answers`, data)
        .then(() => { console.log('Posted answer! Please refresh to see your answer!'); closeForm(); })
        .catch((err) => { console.log('Error posting answer:', err); });
    } else {
      const numPhotos = photos.length;
      const convertPhotos = [...photos];
      // eslint-disable-next-line array-callback-return
      convertPhotos.map((photo) => {
        // eslint-disable-next-line no-undef
        const formData = new FormData();
        formData.append('file', photo);
        formData.append('upload_preset', 'o4h67izt');

        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
          .then((response) => {
            data.photos.push(response.data.url);
            if (data.photos.length === numPhotos) {
              axios.post(`/qa/questions/${question.question_id}/answers`, data)
                .then(() => { console.log('Posted answer! Please refresh to see your answer!'); closeForm(); })
                .catch((err) => { console.log('Error posting answer:', err); });
            }
          })
          .catch((err) => { console.log('Error posting to cloudinary', err); });
      });
    }
  };

  return (
    <div className="questionForm">
      <div onClick={() => { closeForm(); }} className="overlay"></div>
      <div className="q-form-content">
        <h1 className="q-form-title">Submit Your Answer</h1>
        <h3 className="q-form-subtitle">{product_name}: {question.question_body}</h3>
        <hr id="question-break" />
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
          <div className="required">
            <div>Answer</div>
            <div className="ast">*</div>
          </div>
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
            className="submit-img"
            accept="image/*"
            multiple
            onChange={(e) => { setPhotos(e.target.files); }}
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
