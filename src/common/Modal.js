import React from 'react';
import Modal from 'react-modal';

const MyModal = ({children, isOpen, handleModal}) => (
	<Modal 
		style={styles.container}
		isOpen={isOpen}
		onRequestClose={handleModal}
		shouldCloseOnOverlayClick={true}>
		<div>{children}</div>
	</Modal>
)

const styles = {
	overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex:999,
                height: 400,
                width: 400
            },
            content: {
                position: 'absolute',
                top: 400,
                left: 400,
                right: 400,
                bottom: 400,
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                zIndex:9999

            }
}

export default MyModal;