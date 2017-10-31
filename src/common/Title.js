import React from 'react';


const Title = ({children}) => (
	<h1 className="slide-down-skill" style={styles.title}>{children}</h1>
);

const styles = {
	title: {
	    height: 75,
	    marginTop: 50,
	    display: 'flex',
	    alignItems: 'center',
	    borderTop: '1px solid grey',
	    borderBottom: '1px solid grey',
	  }
}

export default Title;