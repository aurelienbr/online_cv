import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

class MyModal extends React.Component {
  componentWillMount() {
    Modal.setAppElement("body");
  }
  render() {
    const {
      isOpen,
      onAfterOpen,
      onRequestClose,
      closeTimeoutMS,
      style
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        closeTimeoutMS={closeTimeoutMS}
        style={style}
        contentLabel="Modal"
      >
        <p>test modal</p>
      </Modal>
    );
  }
}

MyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  style: PropTypes.array
};

export default MyModal;
