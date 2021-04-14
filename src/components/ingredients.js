import React, { Component } from "react";
import '../App.css';
import Item from "./Item";
// import map from './Map';

class Ingredients extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ingredients_array: [],
            ingredient_name: ""
        };
        this.statehandler = this.statehandler.bind(this);
      }
      statehandler(event){
        this.setState({ingredient_name: event.target.value});
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
                    type='text'
                  onChange={this.statehandler}
                  value={this.state.ingredient_name}
                  placeholder="Enter Item name"
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                ></input>
              </div>
              <button
                onClick={this.addItem.bind(this)}
              >
                Add Ingredient
              </button>
                <br/>
              <button>get me recipe!</button>
            </div>
          );
    }

addItem() {
    if (this.state.ingredient_name) {
    //   var d = new Date();
      this.state.ingredients_array.push({
        // date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        item: this.state.ingredient_name,
      });
      this.setState({ ingredients_array: this.state.ingredients_array });
      this.setState({ ingredient_name: "" });
    }
  }

  deleteItem(key) {
    this.state.ingredients_array.splice(key, 1);
    this.setState({ ingredients_array: this.state.ingredients_array });
  }
}

export default Ingredients;