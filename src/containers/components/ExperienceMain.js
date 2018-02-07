import React from "react";
import Text from "../../common/Text";
import EducationCard from "../../common/EducationCard";

const getContainerStyle = mobile =>
  mobile === true ? styles.formationMobile : styles.formation;

const ExperienceMain = ({ mobile, internship, formation }) => {
  return (
    <div style={styles.container} className="main mainCertification">
      <Text id="education.education" style={styles.whiteColor} size="title" />
      <div style={getContainerStyle(mobile)}>
        {formation.map((item, i) => (
          <EducationCard
            key={item.duree}
            date={item.duree}
            style={styles.educationcard}
            title={item.ecole}
            description={item.description}
            lieu={item.lieu}
          />
        ))}
      </div>
      <Text id="education.internship" style={styles.whiteColor} size="title" />
      <div style={getContainerStyle(mobile)}>
        {internship.map((item, i) => (
          <EducationCard
            key={item.duree}
            date={item.duree}
            style={styles.educationcard}
            title={item.titre}
            description={item.description}
            lieu={item.place}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 20
  },
  formation: {
    marginTop: 40,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "80%"
  },
  formationMobile: {
    marginTop: 40,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column"
  },
  educationcard: {
    marginLeft: 20
  },
  whiteColor: {
    color: "#fff"
  }
};

export default ExperienceMain;
