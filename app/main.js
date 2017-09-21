import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route , hashHistory, Link} from "react-router-dom";
// style
import "./style/main.css";
// component
import Channel from "./component/Channel";
import ZhihuContents from "./component/ZhihuContents";

class Home extends React.Component{
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="app">
       {/*  navbar */}
        <div className="navbar">
          <ul>
            <li className="item">
              <Link className="itemLink" to="/channel">频道</Link>
            </li>
            <li className="item">
              <Link className="itemLink" to="/discover">发现</Link>
            </li>
            <li className="item">
              <Link className="itemLink" to="/login">登录</Link>
            </li>
          </ul>
        </div>
        {/*  content */}
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
};

ReactDOM.render((
<Router history={hashHistory}>
<Home>
  <Route exact path="/" component={Channel} />
  <Route exact path="/channel" component={Channel} />
  <Route exact path="/channel/zhihu" component={ZhihuContents} />
</Home>
</Router>
)
,
document.getElementById("app"));
