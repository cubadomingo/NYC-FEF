# another-react-redux-webpack-boilerplate

This is a boilerplate to get started with a React application using the following technologies:

- **Redux** with middleware (**promise**, **logger**)
- **Immutable JS**
- **React-Router V4**
- **Webpack 2** with HMR and configured loaders
- **JS and CSS linting**

## NPM Scripts

`npm run start` runs webpack-dev-server with HMR for development

`npm run build` creates a bundle placed in the root directory for production

`npm run test:lint` runs ESlint

`npm run test` runs the test suite with automatic reload

## File Structure

- `/src` - the folder for your application's code

  * `/actions` - place actions here

  * `/assets` - public path for fonts, images, etc.

  * `/components` - place components here

  * `/helpers` - place helpers here

  * `/reducers` - place all reducers here

  * `/routes` - place all configuration and setup up for react router here

  * `/store` - place all config files for Redux store here

  * `index.js` - main entrypoint for webpack and startup file for react

- `.babelrc` - configuration file for babel transpiler
- `.editorconfig` - editor configuration and settings
- `.eslintignore` - ESlint ignores files or folders placed here
- `.eslintrc.js` - linting rules for ESlint
- `.gitignore` - Git ignores files or folders placed here
- `package.json` - project information, commands, and dependencies
- `webpack.config.dev.js` - configuration for development server
- `webpack.config.prod.js` - configuration for building in production
