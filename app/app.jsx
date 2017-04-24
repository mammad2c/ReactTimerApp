var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter, Route, Link, Match, Miss} = require('react-router-dom');

var Navigation = require('Navigation');
// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
  <HashRouter>
    <div>
      <Navigation />
    </div>
  </HashRouter>, document.getElementById('app'));
