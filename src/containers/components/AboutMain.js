import React from "react";
import PropTypes from "prop-types";

import Text from "../../common/Text";
import BarSkill from "../../common/BarSkill";
import { colors } from "../../style/colors";

const AboutMain = ({ mobile, downloadCV }) => (
  <div className="main mainAbout">
    <Text
      size="h2"
      style={styles.header}
      className="slide-down-skill"
      id="about.title"
    />
    <div style={mobile ? styles.containerMobile : styles.container}>
      <div style={styles.description}>
        <Text
          className="slide-up-presentation"
          style={{ width: "90%" }}
          size="p"
          id="about.main"
        />
      </div>
      <div style={mobile ? styles.skillContainerMobile : styles.skillContainer}>
        <BarSkill
          containerStyle={mobile ? styles.skillMobile : styles.skill}
          style={styles.html}
          title={"HTML CSS"}
        />
        <BarSkill
          containerStyle={mobile ? styles.skillMobile : styles.skill}
          style={styles.react}
          title={"React Native / ReactJS"}
        />
        <BarSkill
          containerStyle={mobile ? styles.skillMobile : styles.skill}
          style={styles.nodeJS}
          title={"NodeJS"}
        />
        <BarSkill
          containerStyle={mobile ? styles.skillMobile : styles.skill}
          style={styles.java}
          title={"Java (Android)"}
        />
      </div>
    </div>
    <div onClick={this.downloadCV} className="imageProfil boum-boum" />
  </div>
);

AboutMain.propTypes = {
  downloadCV: PropTypes.func.isRequired,
  mobile: PropTypes.bool
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 75
  },
  header: {
    marginTop: 40
  },
  html: {
    height: "100%",
    width: "90%",
    backgroundColor: colors.greenFour
  },
  description: {
    flex: 1,
    fontSize: 16,
    marginLeft: 30
  },
  react: {
    height: "100%",
    width: "80%",
    backgroundColor: colors.greenOne
  },
  nodeJS: {
    height: "100%",
    width: "50%",
    backgroundColor: colors.greenTwo
  },
  java: {
    height: "100%",
    width: "70%",
    backgroundColor: colors.greenThree
  },
  skill: {
    height: 40,
    backgroundColor: "#ecf0f1",
    marginBottom: 20
  },
  skillMobile: {
    flex: 1,
    height: 40,
    marginTop: 20
  },
  skillContainer: {
    flex: 1,
    marginTop: -20
  },
  containerMobile: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  skillContainerMobile: {
    marginTop: 20,
    marginLeft: 20
  }
};

export default AboutMain;
