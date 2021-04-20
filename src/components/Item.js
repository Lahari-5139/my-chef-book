import React, { Component } from "react";
import '../App.css';

export default class Item extends Component {
    render() {
      return (
        <div key={this.props.keyval}>
          {/* <Text >{this.props.val.date}</Text> */}
          <p >{this.props.val.item}</p>
  
          <button className='button'
            onClick={this.props.deleteMethod}
          >
            Delete Ingredient
          </button>
        </div>
      );
    }
  }