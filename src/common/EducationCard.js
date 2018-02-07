import React, { Component } from "react";

class EducationCard extends Component {
  render() {
    const { date, description, lieu, title } = this.props;
    return (
      <div className="educationCard" style={styles.container}>
        <p style={{ ...styles.title, ...styles.whiteColor }}>{title}</p>
        <p style={{ ...styles.date, ...styles.whiteColor }}>{date}</p>
        <p style={styles.whiteColor}>{lieu}</p>
      </div>
    );
  }
}

const styles = {
  container: {
    border: "1px solid #89bbd3",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  whiteColor: {
    color: "#fff"
  }
};

export default EducationCard;
