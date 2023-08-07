import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <h2 id="modal-title">Hello, I am a modal</h2>
      <button id="close-modal-button" onClick={onClose}>
        Close Modal
      </button>
    </div>,
    document.getElementById('modalDiv') //create this is in index.html
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTheModal = () => {
    setIsModalOpen(true);
  };

  const closeTheModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button id="open-modal-button" onClick={openTheModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeTheModal} />
    </div>
  );
};

export default App
