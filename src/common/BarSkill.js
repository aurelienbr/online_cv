import React from "react";

const BarSkill = ({ title, containerStyle, style }) => (
  <div>
    <p>{title}</p>
    <div style={containerStyle}>
      <div style={style} />
    </div>
  </div>
);

export default BarSkill;
