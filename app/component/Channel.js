import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from "react-router-dom";
// style
import "../style/Channel.css";

class Channel extends React.Component{
  render() {
    return (
      <div className = "channelWrapper" >
        <ul className="channels">
          <li className="channel">
            <Link className="channel-item zhihu" to="/channel/zhihu">知乎日报</Link>
          </li>
          <li className="channel">
            <Link className="channel-item douban" to="/channel/douban">豆瓣热门(未完成)</Link>
          </li>
          <li className="channel">
            <Link className="channel-item weibo" to="/channel/douban">微博热门(未完成)</Link>
          </li>
        </ul>
      </div>
    )
  }
};
export default Channel;
