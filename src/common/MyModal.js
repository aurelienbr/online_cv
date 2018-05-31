// @flow
import React from 'react';
import Modal from 'react-modal';

import type { Node } from 'react';

type Props = {
  isOpen: boolean,
  onAfterOpen?: Function,
  onRequestClose?: Function,
  children: Node,
  closeTimeoutMS?: number,
  style?: Object
};

class MyModal extends React.Component<Props> {
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    const {
      isOpen,
      onAfterOpen,
      onRequestClose,
      closeTimeoutMS,
      style,
      children
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
        {children}
      </Modal>
    );
  }
}

export default MyModal;
