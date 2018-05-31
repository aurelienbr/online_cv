import React from 'react';
import Button from './common/Button';
import BUTTONS from './const/headerConsts';

class MobileHeader extends React.Component {
  render() {
    return (
      <div>
        {BUTTONS.map(button => (
          <Button key={button.id} route={button.to} href={button.href}>
            {button.id}
          </Button>
        ))}
      </div>
    );
  }
}

export default MobileHeader;
