import React, { useState } from 'react';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <button onClick={toggleModal} className="btn-modal" type="submit">
      Open
    </button>
  );
}
