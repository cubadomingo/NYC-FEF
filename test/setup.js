import requireHacker from 'require-hacker';
import mockCSSModules from 'mock-css-modules';

mockCSSModules.register(['.scss']);

requireHacker.hook('png', () => 'module.exports = ""');
requireHacker.hook('svg', () => 'module.exports = ""');
requireHacker.hook('jpg', () => 'module.exports = ""');

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
