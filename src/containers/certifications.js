import React from "react";
import Header from "./header";
import EducationCard from "../common/EducationCard";
import Arrow from "../common/Arrow";
import Formation from "../text/Formation";
import Internship from "../text/internship";
import Title from "../common/Title";

export const Certification = ({ location }) => {
	return (
		<div>
			<Header location={location} />
			<div style={styles.container} className="main mainCertification">
				<Title>EDUCATION</Title>
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
				<Title>INTERNSHIPS</Title>
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
		justifyContent: "space-around"
	},
	educationcard: {
		marginLeft: 20
	}
};
