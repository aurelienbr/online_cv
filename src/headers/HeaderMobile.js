import React from 'react';
import HeaderButton from '../pages/containers/HeaderButton';
import BUTTONS from '../const/headerConsts';

export default () => (
  <div>
    {BUTTONS.map(button => (
      <HeaderButton key={button.id} route={button.to} href={button.href}>
        {button.id}
      </HeaderButton>
    ))}
  </div>
);
