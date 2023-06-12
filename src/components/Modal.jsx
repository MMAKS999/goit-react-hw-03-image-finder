
import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import "../styles.css"
import PropTypes from 'prop-types';
export const Modal = ({ showModal, closeModal, selectedImage }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
          closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  
  if (!showModal) return null;
  return ReactDOM.createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal">
        <img src={selectedImage} alt="" />
      </div>
    </div>,
    document.getElementById('portal')
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired,
};