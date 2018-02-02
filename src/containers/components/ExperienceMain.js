import React from "react";
import Text from "../../common/Text";
import EducationCard from "../../common/EducationCard";
import Arrow from "../../common/Arrow";

const getContainerStyle = mobile =>
  mobile === true ? styles.formationMobile : styles.formation;

const ExperienceMain = ({ mobile, internship, formation }) => {
  console.log(mobile);
  return (
    <div style={styles.container} className="main mainCertification">
      <Text id="education.education" size="title" />
      <div style={getContainerStyle(mobile)}>
        {formation.map((item, i) => (
          <div key={i} style={{ display: "flex" }}>
            <EducationCard
              date={item.duree}
              style={styles.educationcard}
              title={item.ecole}
              description={item.description}
              lieu={item.lieu}
            />
            {i === formation.length - 1 || mobile ? null : (
              <Arrow style={styles.arrow} />
            )}
          </div>
        ))}
      </div>
      <Text id="education.internship" size="title" />
      <div style={getContainerStyle(mobile)}>
        {internship.map((item, i) => (
          <div key={i} style={{ display: "flex" }}>
            <EducationCard
              date={item.duree}
              style={styles.educationcard}
              title={item.titre}
              description={item.description}
              lieu={item.place}
            />
            {i === internship.length - 1 || mobile ? null : (
              <Arrow style={styles.arrow} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  arrow: {
    display: "flex",
    justifyContent: "center",
    width: 100,
    alignSelf: "center",
    height: 4,
    backgroundColor: "black"
  },
  container: {
    backgroundColor: "#ecf0f1"
  },
  formation: {
    marginTop: 40,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between"
  },
  formationMobile: {
    marginTop: 40,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column"
  },
  educationcard: {
    marginLeft: 20
  }
};

export default ExperienceMain;
