import React, { Component } from "react";

export default class Main extends Component {
    render() {
      return (
        <div key={this.props.keyval}>
          {/* <Text >{this.props.val.date}</Text> */}
          <p >{this.props.val.item}</p>
  
          <button
            onClick={this.props.deleteMethod}
          >
            Delete Ingredient
          </button>
        </div>
      );
    }
  }