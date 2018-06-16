// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { capitalizeFirstLetter } from '../tools/stringManipulation';
import HeaderButton from '../pages/containers/HeaderButton';
import BUTTONS from '../const/headerConsts';
import { changeLocale } from '../actions/translations';

import type { translations } from '../type';
import type {
  Connector,
  MapDispatchToProps,
  MapStateToProps
} from 'react-redux';
import type { Action, Dispatch, State } from '../reducers/reducersType';

type OwnProps = {
  location: any,
  match: any,
  history: any
};

type StateProps = {
  locale: string,
  location: any,
  translations: translations
};

type DispatchProps = {
  changeLocale(locale: string): void
};

type Props = StateProps & DispatchProps;

type StateComponent = {
  options: Array<{ value: string, label: string }>
};

class Header extends Component<Props, StateComponent> {
  state = {
    options: []
  };
  componentWillMount() {
    // check if this is the best way to deal with it
    const { translations } = this.props;
    const options = Object.keys(translations).map(key => ({
      value: key,
      label: capitalizeFirstLetter(key)
    }));
    this.setState({ options });
  }
  onSelect = obj => {
    const value = obj.target.value;
    this.props.changeLocale(value);
  };

  render(): React$Element<*> {
    const { location, locale } = this.props;
    const { options } = this.state;

    return (
      <header className="header">
        <div className="headerName">AURELIEN BRACHET</div>
        <div style={styles.containerSelect}>
          <select value={locale} style={styles.select} onChange={this.onSelect}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="headerMenu">
          {BUTTONS.map(button => (
            <HeaderButton
              key={button.id}
              location={location}
              route={`/${locale}${button.to}`}
            >
              {button.id}
            </HeaderButton>
          ))}
        </div>
      </header>
    );
  }
}

const styles = {
  containerSelect: {
    border: '1px solid #ccc',
    width: '60px',
    borderRadius: '3px'
  },
  select: {
    padding: '5px 8px',
    width: '130%',
    border: 'none',
    boxShadow: 'none',
    background: 'transparent'
  }
};

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  locale: state.locale.locale,
  translations: state.locale.translations,
  ...ownProps
});

const mapDispatchToProps: MapDispatchToProps<
  Action,
  OwnProps,
  DispatchProps
> = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  changeLocale: (locale: string) => {
    dispatch(changeLocale(locale));
  }
});

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withRouter(connector(Header));
