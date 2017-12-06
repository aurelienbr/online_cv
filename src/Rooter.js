import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { connect } from "react-redux";
import fr from "react-intl/locale-data/fr";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

import { getTranslations } from "./actions";

import { Presentation, About, Parcours, Contact } from "./containers";
import { BrowserRouter as Router, Route } from "react-router-dom";

addLocaleData([...fr, ...en, ...ru]);

class Rooter extends React.Component {
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
        <Router>
          <div>
            <Route exact path="/" component={Presentation} />
            <Route path="/about" component={About} />
            <Route path="/certifications" component={Parcours} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </IntlProvider>
    );
  }
}
const mapStateToProps = ({ locale }) => ({
  locale: locale.locale,
  translations: locale.translations
});

export default connect(mapStateToProps, { getTranslations })(Rooter);
