import React, { Component } from "react";
import Text from "./Text";

class EducationCard extends Component {
  render() {
    const { date, description, lieu, title } = this.props;
    return (
      <div className="educationCard" style={styles.container}>
        <Text
          style={{ ...styles.title, ...styles.whiteColor }}
          id={title}
          size="p"
        />
        <Text
          style={{ ...styles.date, ...styles.whiteColor }}
          id={date}
          size="p"
        />
        <Text style={styles.whiteColor} id={lieu} size="p" />
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
