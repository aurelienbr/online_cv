import React from 'react';

const Container = ({children,className}) =>{
	return(
		<div className={className} style={style}>{children}</div>
	);
}

const style={
	height:'200px',
	width:'60%',
	backgroundColor:'white',
	alignSelf:'center',
	alignItems:'center',
	textAlign:'center',
	borderRadius:'10px',
	boxShadow: '1px 1px 12px #555'
}

export default Container;