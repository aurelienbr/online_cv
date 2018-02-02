import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../common/Button";

import * as actions from "../actions";

import BUTTONS from "../const/headerConsts";

const options = [
  { value: "fr", label: "Fr" },
  { value: "ru", label: "Ru" },
  { value: "en", label: "En" }
];

class Header extends Component {
  static propTypes = {
    changeLocale: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
  };

  onSelect = obj => {
    const value = obj.target.value;
    this.props.changeLocale(value);
  };

  render() {
    const { location, locale } = this.props;
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
            <Button key={button.id} location={location} route={button.to}>
              {button.id}
            </Button>
          ))}
        </div>
      </header>
    );
  }
}

const styles = {
  containerSelect: {
    border: "1px solid #ccc",
    width: "60px",
    borderRadius: "3px"
  },
  select: {
    padding: "5px 8px",
    width: "130%",
    border: "none",
    boxShadow: "none",
    background: "transparent"
  }
};

const mapStateToprops = ({ locale }) => ({
  locale: locale.locale
});

export default connect(mapStateToprops, actions)(Header);
