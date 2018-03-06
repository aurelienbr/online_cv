// @flow
import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { connect } from "react-redux";
import fr from "react-intl/locale-data/fr";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

import { getTranslations } from "./actions";

import Presentation from "./containers/Presentation";
import About from "./containers/About";
import Parcours from "./containers/Parcours";
import Contact from "./containers/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MediaQuery from "react-responsive";
import MobileScreen from "./MobileScreen";

addLocaleData([...fr, ...en, ...ru]);

type Props = {
  translations: Object,
  locale: string,
  getTranslations: Function
};

class Rooter extends React.Component<Props> {
  componentDidMount() {
    this.props.getTranslations();
  }
  render() {
    const { locale, translations } = this.props;
    if (translations.length === 0) {
      return <div />;
    }

    return (
      <IntlProvider
        key={locale}
        locale={locale}
        messages={translations[locale]}
      >
        <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Router>
              <div>
                <Route exact path="/" component={Presentation} />
                <Route path="/about" component={About} />
                <Route path="/certifications" component={Parcours} />
                <Route path="/contact" component={Contact} />
              </div>
            </Router>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <MobileScreen />
          </MediaQuery>
        </div>
      </IntlProvider>
    );
  }
}
const mapStateToProps = ({ locale }) => ({
  locale: locale.locale,
  translations: locale.translations
});

export default connect(mapStateToProps, { getTranslations })(Rooter);
