// @flow
import React from 'react';
import imgMail from '../../assets/icons/mail64.png';

type Props = {
  children: string,
  onClick: Function
};

const ButtonContact = ({ children, onClick }: Props) => (
  <button onClick={onClick} style={styles.button} className="buttonContact">
    <img alt="contact me" src={imgMail} />
  </button>
);

const styles = {
  button: {
    color: '#fff',
    fontSize: '39px',
    position: 'fixed',
    zIndex: '-1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    cursor: 'pointer'
  }
};

export default ButtonContact;
