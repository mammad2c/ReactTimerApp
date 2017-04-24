var React = require('react');
var {NavLink} = require('react-router-dom');

var Navigation = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <NavLink to="/" exact replace activeClassName="active-link">Timer</NavLink>
            </li>
            <li>
              <NavLink to="/count-down" activeClassName="active-link">Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <span>Created by </span>
              <a href="http://www.mead.io" target="_blank">Mammad Toosi</a>
            </li>
          </ul>
        </div>
      </div>
      );
  }
});

module.exports = Navigation;