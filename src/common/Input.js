import React from 'react';

const Input = ({
  textArea,
  styles,
  spanUpStyle,
  spanDownStyle,
  containerInputStyle,
  textarea,
  handleTextAreaChange,
  handleChangeInput,
  value
}: Props) => {
  if (textArea) {
    return (
      <div
        className="wrap-input-contact"
        style={containerInputStyle}
        data-validate="Message is required"
      >
        <span style={spanUpStyle}>Message</span>
        <textarea
          value={textarea}
          onChange={handleTextAreaChange}
          className="input"
          style={styles}
          name="message"
          placeholder="Your message here..."
        />
        <span className="focus-input" style={spanDownStyle} />
      </div>
    );
  }
  return (
    <div className="wrap-input-contact" style={containerInputStyle}>
      <span style={spanUpStyle}>Your Name</span>
      <input
        className="input"
        style={styles}
        type="text"
        name="name"
        value={value}
        onChange={handleChangeInput}
        placeholder="Enter your name"
      />
      <span className="focus-input" style={spanDownStyle} />
    </div>
  );
};

export default Input;
