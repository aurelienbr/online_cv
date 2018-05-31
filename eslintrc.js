module.exports = {
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    mocha: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  plugins: [
    "fp",
    "prettier",
    "react",
    "react-native",
    "transform-class-properties"
  ],
  presets: ["flow", "stage-2"],
  rules: {
    // Soft some rules.
    "global-require": 0, // Used by webpack-isomorphic-tools and React Native.
    "import/first": 0, // Sorts by atom/sort-lines natural order.
    "no-use-before-define": 0, // It's nice to have styles on the botom.
    "import/no-duplicates": 2,
    "no-undef": 0,
    "import/prefer-default-export": 0, // No. Actions can have just one action.
    "no-class-assign": 0, // Class assign is used for higher order components.
    "no-confusing-arrow": 0, // This rule is super confusing.
    "no-duplicate-imports": 0, // github.com/babel/eslint-plugin-babel/issues/59#issuecomment-230118848
    "no-nested-ternary": 0, // It's nice for JSX.
    "no-param-reassign": 0, // We love param reassignment. Naming is hard.
    "no-shadow": 0, // Shadowing is a nice language feature. Naming is hard.
    "no-underscore-dangle": 0,
    "import/extensions": [2, { js: "never", json: "always" }],
    "react/jsx-filename-extension": 0, // No, JSX belongs to .js files
    "jsx-a11y/href-no-hash": "off",
    "sort-keys": 2,
    // React Native.
    "react-native/no-color-literals": 2,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    // Rules for functional programming. We do not need Object.freeze.
    "fp/no-mutating-assign": 2,
    "fp/no-mutating-methods": 2,
    "fp/no-mutation": [
      "error",
      {
        commonjs: true,
        allowThis: true,
        exceptions: [
          { property: "propTypes" },
          { property: "navigationOptions" }
        ]
      }
    ],
    // Prettier.
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "all"
      }
    ]
  }
};
