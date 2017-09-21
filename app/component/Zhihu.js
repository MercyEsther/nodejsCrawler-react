import React from "react";
import ReactDOM from "react-dom";
import data from "../json/zhihu.json";

var Zhihu = React.createClass({
  render: function(){
    return(
    <div className="zhihuWrapper">
      <h2 className="title"> {data[this.props.index].title} </h2>
      {
        data[this.props.index].content.map((item, index) =>{
          return (
            <p className="para" style={{fontSize:this.props.fontSize}} key={index}> {item.para} </p>
          )
        })
      }
    </div>
    )
  }
})
export default Zhihu;
