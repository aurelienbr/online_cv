import React from "react";
import { FormattedMessage } from "react-intl";

const styles = {
  h1: {
    fontSize: 70
  },
  h2: {
    fontSize: 50
  },
  h3: {
    fontSize: 40
  },
  h4: {
    fontSize: 24
  },
  p: {
    fontSize: 16
  },
  error: {
    fontSize: 16,
    color: 'red'
  },
  title: {
    height: 75,
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    borderBottom: "5px solid #fff"
  }
};

const map = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  p: styles.p,
  error: styles.error,
  title: { ...styles.title, ...styles.h2 }
};

const getStyle = size => {
  const style = map[size];
  if (!style) {
    throw new Error(`size ${style}" not supported`);
  }
  return style;
};

const Text = ({ className, id, style, size }) => (
  <p className={className} style={{ ...getStyle(size), ...style }}>
    <FormattedMessage id={id} defaultMessage={id} />
  </p>
);

export default Text;
