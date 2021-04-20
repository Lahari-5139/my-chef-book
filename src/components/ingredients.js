import React, { Component } from "react";
import "../App.css";
import Item from "./Item";
// import {useHistory} from 'react-router-dom';
// import map from './Map';
// import { hashHistory } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    // const history = useHistory();
    this.state = {
      ingredients_array: [],
      ingredient_name: ""
    };
    this.statehandler = this.statehandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  statehandler(event) {
    this.setState({ ingredient_name: event.target.value });
  }
  handleClick() {
    this.props.history.push("/recipe");
  }

  render() {
    let items = this.state.ingredients_array.map((val, key) => {
      return (
        <Item
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteItem(key)}
        />
      );
    });
    return (
      <div>
        <div>
          <h2>Enter Ingredients</h2>
        </div>
        <div>{items}</div>
        <div>
          <input
            className="inputbox"
            type="text"
            onChange={this.statehandler}
            value={this.state.ingredient_name}
            placeholder="Enter Item name"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </div>
        <button className="button" onClick={this.addItem.bind(this)}>
          Add Ingredient
        </button>
        <br />
        <button className="button" type="button" onClick={this.handleClick}>
          get me recipe!
        </button>
      </div>
    );
  }

    addItem() {
        
      if (this.state.ingredient_name) {
          
      //   var d = new Date();
      this.state.ingredients_array.push({
        // date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        item: this.state.ingredient_name
      });
      this.setState({ ingredients_array: this.state.ingredients_array });
        this.setState({ ingredient_name: "" });
        
      
        }
        this.showItems();
  }

  deleteItem(key) {
    this.state.ingredients_array.splice(key, 1);
    this.setState({ ingredients_array: this.state.ingredients_array });
  }

    showItems() {
        console.log("show items")
        for (var p in this.state.ingredients_array)
            console.log( this.state.ingredients_array[p])
  }
}

export default withRouter(Ingredients);
