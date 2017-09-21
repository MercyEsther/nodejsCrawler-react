import React from "react";
import ReactDOM from "react-dom";
// style
import "../style/Controller.css";

var Controller = React.createClass ({
  getInitialState: function(){
    return {
      fontSize: 16
    };
  },

  fontInc: function(){
    let fontSize = 0+this.state.fontSize+2 + "px";
    this.props.handleFontInc(fontSize);
    this.setState({fontSize: this.state.fontSize+2});
  },

  fontDec: function(){
    let fontSize = "" + this.state.fontSize-2 + "px";
    this.props.handleFontInc(fontSize);
    this.setState({fontSize: this.state.fontSize-2});
  },

  render: function() {
    return (
      <div className="controller">
      <span className="button" onClick={this.fontInc}> + </span>
      <span className="button" onClick={this.fontDec}> - </span>
      </div>
    );
  }
})
export default Controller;
