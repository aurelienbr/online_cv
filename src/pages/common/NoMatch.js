// @flow
import React from 'react';

type Props = {
  location: any
};

export default ({ location }: Props) => (
  <div>
    <h3>
      Error 404 for <code>{location.pathname}</code>
    </h3>
  </div>
);
