import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearModalHandler}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="Modal"
  >
    <h3 className="Modal__title">Selected Option</h3>
    {props.selectedOption && <p className="Modal__body">{props.selectedOption}</p>}
    <button 
      onClick={props.clearModalHandler}
      className="Button"
    >
      Okay
    </button>
  </Modal>
);

export default OptionModal;