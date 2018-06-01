// @flow
import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';

import Text from '../../common/Text';
import EducationCard from '../../common/EducationCard';
import WithinView from '../../common/WithinView';

type Props = {
  mobile?: boolean,
  internship: any,
  education: any
};

const getContainerStyle = mobile => (mobile === true ? styles.formationMobile : styles.formation);

const ExperienceMain = ({ mobile, internship, education }: Props) => {
  return (
    <div style={styles.container} className="main mainCertification">
      {education.length === 0 ? (
        <div style={styles.loaderContainer}>
          <Loader type="Rings" color="#fff" height="45" width="45" />
        </div>
      ) : (
        <Text id="education.education" style={styles.whiteColor} size="title" />
      )}
      <div style={getContainerStyle(mobile)}>
        {education.map(item => (
          <WithinView key={item.duree}>
            <EducationCard
              mobile={mobile}
              duree={item.duree}
              href={item.href}
              titre={item.ecole}
              description={item.description}
              lieu={item.lieu}
              coord={item.coord}
            />
          </WithinView>
        ))}
      </div>
      {internship.length > 0 && education.length > 0 ? (
        <Fragment>
          <Text id="education.internship" style={styles.whiteColor} size="title" />
          <div style={getContainerStyle(mobile)}>
            {internship.map(item => (
              <WithinView key={item.duree}>
                <EducationCard
                  mobile={mobile}
                  duree={item.duree}
                  href={item.href}
                  titre={item.titre}
                  description={item.description}
                  lieu={item.lieu}
                  coord={item.coord}
                />
              </WithinView>
            ))}
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

ExperienceMain.defaultProps = {
  mobile: false
};

const styles = {
  container: {
    padding: 20
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formation: {
    marginTop: 40,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '80%'
  },
  formationMobile: {
    marginTop: 40,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  whiteColor: {
    color: '#fff'
  }
};

export default ExperienceMain;
