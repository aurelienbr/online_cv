// @flow
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import { getTranslations } from '../actions';

import { BrowserRouter as Router } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MobileScreenRouter from './MobileScreenRouter';
import DesktopScreenRouter from './DesktopScreenRouter';

import type { Connector, MapDispatchToProps, MapStateToProps } from 'react-redux';
import type { Action, Dispatch, State } from '../reducers/reducersType';

addLocaleData([...fr, ...en, ...ru]);

type StateProps = {
  translations: Object,
  locale: string,
  loading: boolean,
  err: Object
};

type DispatchProps = {
  getTranslations(): void
};

type OwnProps = {
  location?: any
};

type Props = StateProps & DispatchProps;

class Rooter extends React.Component<Props> {
  componentDidMount() {
    this.props.getTranslations();
  }
  render(): React$Element<*> {
    const { locale, translations, err, loading } = this.props;
    if (loading) {
      return <div />;
    }

    if (Object.keys(err).length > 0) {
      return <div>An error occured, please check your internet connection</div>;
    }

    return (
      <IntlProvider key={locale} locale={locale} messages={translations[locale]}>
        <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Router>
              <DesktopScreenRouter />
            </Router>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <MobileScreenRouter />
          </MediaQuery>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps: MapStateToProps<State, OwnProps, StateProps> = (
  state: State,
  ownProps: OwnProps
): StateProps => ({
  locale: state.locale.locale,
  translations: state.locale.translations,
  err: state.locale.err,
  loading: state.locale.loading,
  ...ownProps
});

const mapDispatchToProps: MapDispatchToProps<Action, OwnProps, DispatchProps> = (
  dispatch: Dispatch,
  ownProps: OwnProps
): DispatchProps => ({
  getTranslations: () => {
    dispatch(getTranslations());
  }
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(Rooter);
