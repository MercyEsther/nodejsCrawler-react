import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Link} from "react-router-dom";
import "../style/Navbar.css";

var Navbar = React.createClass ({
  render: function() {
    return (
      <Router>
      <div className="navbar">
        <ul>
          <li className="item">
            <Link className="itemLink" to="/channel">频道</Link>
          </li>
          <li className="item">
            <a className="itemLink" href="/discover">发现</a>
          </li>
          <li className="item">
            <a className="itemLink" href="/login">登录</a>
          </li>
        </ul>
      </div>
      </Router>
    )
  }
});
ReactDOM.render (
  <Navbar/>,
  document.getElementById("header")
)
