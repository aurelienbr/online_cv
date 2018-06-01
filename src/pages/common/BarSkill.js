// @flow
import React from 'react';

type Props = {
  title: string,
  style?: Object,
  containerStyle?: Object
};

export default ({ title, containerStyle, style }: Props): React$Element<*> => (
  <div>
    <p>{title}</p>
    <div style={containerStyle}>
      <div style={style} />
    </div>
  </div>
);
