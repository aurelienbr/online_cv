import React from "react";
import PropTypes from "prop-types";

import Text from "../../common/Text";

const ButtonContact = ({ children, onClick }) => (
  <button onClick={onClick} style={styles.button} className="buttonContact">
    <Text style={styles.textButton} size="p" id="Contact Me" />
  </button>
);

ButtonContact.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const styles = {
  button: {
    color: "#fff",
    fontSize: "39px",
    position: "fixed",
    zIndex: "-1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    cursor: "pointer"
  },
  textButton: {
    marginTop: 10
  }
};

export default ButtonContact;
