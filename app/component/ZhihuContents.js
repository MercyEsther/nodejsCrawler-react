import React from "react";
import ReactDOM from "react-dom";
// style
import "../style/ZhihuContents.css";
import "../style/Controller.css";
// component
import Controller from "./Controller";
import Zhihu from "./Zhihu";

var ZhihuContents = React.createClass ({
  getInitialState: function(){
    return {
      index: 0,
      startX: 0,
      endX: 0,
      done: false,
      fontSize: "18px"
    }
  },

  //翻页 （记录开始与结束时刻的坐标）
  //  鼠标按下or开始触摸
  handleStart: function(e){
    let x = "";
    switch (e.type){
      case "mousedown":
        x = e.pageX;
        break;
      case "touchstart":
        x = e.touches[0].pageX;
        break;
    }
    this.setState({
      startX: x
    });
  },

  //翻页
  //  鼠标弹起or触摸结束
  handleEnd: function(e){
    let x = "";
    switch (e.type){
      case "mouseup":
        x = e.pageX;
        break;
      case "touchend":
        x = e.changedTouches[0].pageX;
        break;
    };
    this.setState({
      endX: x,
      done: true
    })
  },

  //调整字体
  //  该函数传递给子组件
  handleFontInc: function(fontSize){
    console.log(fontSize);
    this.setState({fontSize: fontSize});
  },

  render: function(){
    //控制翻页
    //****************************
    if(((this.state.startX - this.state.endX) > 200 )&&this.state.done){
      this.setState({
        index: this.state.index+1,
        startX: 0,
        endX: 0,
        done:false
      })
    }else if(((this.state.endX - this.state.startX) > 200 )&&this.state.done) {
      if(this.state.index == 0){
        this.setState({
          startX: 0,
          endX: 0,
          done:false
        })
      }else {
        this.setState({
          index: this.state.index-1,
          startX: 0,
          endX: 0,
          done:false
        })
      }
    }
    //***************************
    return(
      <div className="article" onMouseDown={this.handleStart} onMouseUp={this.handleEnd} onTouchStart={this.handleStart} onTouchEnd={this.handleEnd}>
        <Controller className="controller" ref="controller" handleFontInc={this.handleFontInc}/>
        <span className="tips"> 左右滑动切换文章 </span>
        <Zhihu index={this.state.index} fontSize={this.state.fontSize}/>
      </div>
    )
  }
});
export default ZhihuContents;
