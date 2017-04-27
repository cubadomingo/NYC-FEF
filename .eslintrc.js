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
    'react/prop-types': 0,
    'max-len': 0,
  },
};
