import Module from 'module';

/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
/* eslint no-return-assign: 0 */

// sets require handler for .scss, .png, .svg, .jpg files */

Module._extensions['.scss'] = (module, filename) => {
  module.exports = new Proxy({}, {
    get: (target, property) => {
      if (property === '__esModule') return false;
      return property;
    },
  });
};

Module._extensions['.png'] = () => module.exports = '';
Module._extensions['.svg'] = () => module.exports = '';
Module._extensions['.jpg'] = () => module.exports = '';

// sets dom with jsdom

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
