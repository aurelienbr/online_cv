// @flow
import React from "react";
import Text from "../../common/Text";

type Props = {
  mobile?: boolean,
  slideFooter: boolean
}

const PresentationExperience = ({ mobile, slideFooter }: Props) => (
  <div className="main mainPresentation">
    <h3 className="slide-down" style={styles.monograme}>
      AB
    </h3>
    <Text
      className={slideFooter ? "slide-down" : "none"}
      size={mobile ? "h3" : "h1"}
      id="home.name"
      style={styles.title}
    />
    <Text
      className={slideFooter ? "slide-up" : "none"}
      size={mobile ? "h4" : "h2"}
      id="home.fonction"
      style={styles.pres}
    />
  </div>
);

const styles = {
  monograme: {
    fontSize: 35,
    height: 80,
    width: 80,
    border: "5px solid #fff",
    borderRadius: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    boxShadow: "0 0 5px 5px #888"
  },
  title: {
    marginTop: 30
  },
  pres: {
    marginBottom: 50
  }
};

export default PresentationExperience;
