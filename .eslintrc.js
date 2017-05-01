module.exports = {
  env: {
    browser: true,
    commonjs: true,
    mocha: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'no-unused-expressions': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'max-len': 0,
    'import/no-named-as-default': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
  },
};
