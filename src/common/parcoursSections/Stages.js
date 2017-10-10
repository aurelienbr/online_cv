import React, { Component } from 'react';
import Internship from '../../text/internship';
import Formation from '../../text/Formation';

class Stages extends Component{
	state = {
		slide: true,
	}
	render(){
		return(
			<div style={styles.container}>
				<div>
				<h1 style={{textAlign:'center'}}>INTERNSHIP</h1>
					{Internship.map(data=>(
						<div key={data.titre} style={styles.littleContainer}>
							<header className="slide-right" style={styles.image}>
								<img src={require('../../images/formation/actum.png')} alt="Smiley face" height="125" width="125"/>
							</header>
							<main style={styles.main}>
								<h1 className="slide-down" style={styles.titre}>{data.titre}</h1>
								<h3 className="slide-left" style={styles.duree}>{data.duree}</h3>
								<h4 className="slide-up" style={styles.lieu}>{data.lieu}</h4>
								<p  className="slide-up" style={styles.description}>{data.description}</p>
							</main>
						</div>
					)
				)}
				</div>
				<div style={{marginTop: '40px'}}>
				<h1 style={{textAlign:'center'}}>FORMATION</h1>
					{Formation.map(data=>(
						<div key={data.titre} style={styles.littleContainer}>
							<header style={styles.image}>
								<img src={require('../../images/formation/actum.png')} alt="Smiley face" height="125" width="125"/>
							</header>
							<main style={styles.main}>
								<h1 style={styles.titre}>{data.ecole}</h1>
								<h2 style={styles.duree}>{data.duree}</h2>
								<h4 style={styles.lieu}>{data.lieu}</h4>
								<p style={styles.description}>{data.description}</p>
							</main>
						</div>
					)
				)}
					</div>
			</div>
		);
	}
}

const styles = {
	container: {
		minHeight: '0px',
		display: 'flex',
		flexDirection:'column',
	},
	image:{
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
	},
	littleContainer: {
		display:'flex',
		borderBottom: '1px solid black',
		marginBottom: '20px',
		padding: '20px',
	},
	main: {
		flex: 4,
	},
	titre: {

	},
	company: {

	},
	duree: {

	},
	lieu: {

	},
	description: {

	}
};

export { Stages };