# another-react-redux-webpack-boilerplate

This is a boilerplate to get started with a react application. I detail the configuration the best I can throughout the readme but if you have any questions open up an issue. Hopefully this helps with spending less time on configuration and folder structuring and allows you to spend more time writing code. ❤️

Development:
- **React**
- **Redux** with middleware
- **Webpack 2** with HMR and configured loaders
- **NPM**
- **ES6**

Testing:
- **Mocha**
- **Chai**

## Table of Contents
- [NPM Scripts](##NPMScripts)
- [Webpack Configuration](##WebpackConfiguration)
- [Testing Configuration](##TestingConfiguration)
- [Files and Structure](##FilesandStructure)
- [FAQ](##FAQ)

## NPM Scripts

`npm run start` runs webpack-dev-server with HMR for development

`npm run build` creates a bundle placed in the root directory for production

`npm run test:lint` runs ESlint

`npm run test` runs the test suite with automatic reload

## Webpack Configuration

I use `webpack-merge` to manage splitting the webpack configuration file. I set up the common configuration file in `webpack.config.js` and require `webpack.parts.js` extracting the parts that I want and merging them depending on what the `env` variable is set to. This helps me maintain my sanity.

## Testing Configuration

## Files and Structure

- `/src` - the folder for your application's code

  * `/actions` - place actions here

  * `/assets` - public path for fonts, images, etc.

  * `/components` - place components here

    * `/comment_box` - sample component folder

      * `comment_box.js` - component js file

      * `comment_box.scss` - component styling

  * `/helpers` - place helpers here

  * `/reducers` - place all reducers here

  * `/store` - place all config files for Redux store here

  * `index.js` - main entrypoint for webpack and startup file for react

- `.babelrc` - configuration file for babel transpiler
- `.editorconfig` - editor configuration and settings
- `.eslintcache` - cache of linting errors created by ESlint after running
- `.eslintignore` - ESlint ignores files or folders placed here
- `.eslintrc.js` - linting rules for ESlint
- `.gitignore` - Git ignores files or folders placed here
- `package.json` - project information, commands, and dependencies
