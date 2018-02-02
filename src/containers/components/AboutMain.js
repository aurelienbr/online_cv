import React from "react";
import PropTypes from "prop-types";

import Text from "../../common/Text";
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
        <p className="slide-up-presentation" style={{ width: "90%" }}>
          Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là,
          mais la majeure partie d'entre elles a été altérée par l'addition
          d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du
          texte standard. Si vous voulez utiliser un passage du Lorem Ipsum,
          vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le
          texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à
          reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul
          vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de
          200 mots latins, en combinaison de plusieurs structures de phrases,
          pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu
          ne contient aucune répétition, ni ne contient des mots farfelus, ouco
          des touches d'humour. Plusieurs variations de Lorem Ipsum peuvent être
          trouvées ici ou là, mais la majeure partie d'entre elles a été altérée
          par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
          une seconde à du texte standard. Si vous voulez utiliser un passage du
          Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché
          dans le texte. Tous les générateurs de Lorem Ipsum sur Internet
          tendent à reproduire le même extrait sans fin, ce qui fait de
          lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un
          dictionnaire de plus de 200 mots latins, en combinaison de plusieurs
          structures de phrases, pour générer un Lorem Ipsum irréprochable. Le
          Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient
          des mots farfelus, ou des touches d'humour.
        </p>
      </div>
      <div style={mobile ? styles.skillContainerMobile : styles.skillContainer}>
        <p>HTML CSS</p>
        <div style={mobile ? styles.skillMobile : styles.skill}>
          <div style={styles.html} />
        </div>
        <p>React Native / ReactJS</p>
        <div style={mobile ? styles.skillMobile : styles.skill}>
          <div style={styles.react} />
        </div>
        <p>NodeJS</p>
        <div style={mobile ? styles.skillMobile : styles.skill}>
          <div style={styles.nodeJS} />
        </div>
        <p>Java (Android)</p>
        <div style={mobile ? styles.skillMobile : styles.skill}>
          <div style={styles.java} />
        </div>
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
