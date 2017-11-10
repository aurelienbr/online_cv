import React from "react";

const ContainerContact = ({ children, className }) => {
	return (
		<div className={className} style={style}>
			{children}
		</div>
	);
};

const style = {
	height: "400px",
	width: "40%",
	backgroundColor: "white",
	alignSelf: "center",
	alignItems: "center",
	textAlign: "center",
	borderRadius: "10px",
	boxShadow: "1px 1px 12px #555"
};

export default ContainerContact;
