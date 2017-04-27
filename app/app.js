var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter, Route, Link, Match, Miss} = require('react-router-dom');

var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');
// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
  <HashRouter>
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <Route exact path="/" component={ Timer } />
          <Route path="/countdown" component={ Countdown } />
        </div>
      </div>
    </div>
  </HashRouter>, document.getElementById('app'));
