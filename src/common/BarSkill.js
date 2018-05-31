// @flow
import React from 'react';

type Props = {
  title: string,
  style?: Object,
  containerStyle?: Object
};

const BarSkill = ({ title, containerStyle, style }: Props) => (
  <div>
    <p>{title}</p>
    <div style={containerStyle}>
      <div style={style} />
    </div>
  </div>
);

export default BarSkill;
