import React from "react";
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import ReactSwipe from 'react-swipe';

import Header from "./header";
import EducationCard from "../common/EducationCard";
import Arrow from "../common/Arrow";
import Formation from "../text/Formation";
import Internship from "../text/internship";
import Text from "../common/Text";

export const Parcours = ({ location }) => {
	return (
		<div>
			<MediaQuery query="(min-device-width: 1224px)">
				<Header location={location} />
				<div style={styles.container} className="main mainCertification">
					<Text id="education.education" size="title"/>
					<div style={styles.formation}>
						{Formation.map((item, i) => (
							<div key={i} style={{ display: "flex" }}>
								<EducationCard
									date={item.duree}
									style={styles.educationcard}
									title={item.ecole}
									description={item.description}
									lieu={item.lieu}
								/>
								{i === Formation.length - 1 ? null : (
									<Arrow style={styles.arrow} />
								)}
							</div>
						))}
					</div>
					<Text id="education.internship" size="title" />
					<div style={styles.formation}>
						{Internship.map((item, i) => (
							<div key={i} style={{ display: "flex" }}>
								<EducationCard
									date={item.duree}
									style={styles.educationcard}
									title={item.titre}
									description={item.description}
									lieu={item.place}
								/>
								{i === Internship.length - 1 ? null : (
									<Arrow style={styles.arrow} />
								)}
							</div>
						))}
					</div>
				</div>
			</MediaQuery>
			<MediaQuery query="(max-device-width: 1224px)">
				<div style={styles.container} id="parcours" className="main mainCertification">
					<Text id="education.education" size="title"/>
					<ReactSwipe key={location} style={styles.formationMobile}>
						{Formation.map((item, i) => (
								<EducationCard
									date={item.duree}
									key={item.duree}
									style={styles.educationcard}
									title={item.ecole}
									description={item.description}
									lieu={item.lieu}
								/>
						))}
					</ReactSwipe>
					<Text id="education.internship" size="title" />
					<ReactSwipe key={location} style={styles.formationMobile}>
						{Internship.map((item, i) => (
								<EducationCard
									date={item.duree}
									key={item.duree}
									style={styles.educationcard}
									title={item.titre}
									description={item.description}
									lieu={item.place}
								/>
						))}
					</ReactSwipe>
				</div>
			</MediaQuery>
		</div>
	);
};

Parcours.propTypes = {
	location: PropTypes.array,
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
		justifyContent: "space-around"
	},
	formationMobile: {
		marginTop: 40,
		marginBottom: 20,
	},
	educationcard: {
		marginLeft: 20
	}
};
