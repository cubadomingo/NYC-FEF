import hook from 'css-modules-require-hook'
import requireHacker from 'require-hacker'
import sass from 'node-sass'

hook({
  extensions: [ '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css
})

requireHacker.hook('png', () => 'module.exports = ""')
requireHacker.hook('svg', () => 'module.exports = ""')
requireHacker.hook('jpg', () => 'module.exports = ""')


const jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

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
