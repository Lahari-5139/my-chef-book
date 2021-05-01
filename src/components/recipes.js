import React, { Component } from "react";
import { withRouter } from "react-router";
import '../App.css';

class Recipes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            recipes_array: [],
            recipe_name: ""
        };
        this.handleClick = this.handleClick.bind(this);
}
handleClick() {
    this.props.history.push('/instructions');
} 
render(){
    return(
        <div>
            <h3>Select a Recipe from below</h3>
            <button className='button'
              type="button"
              onClick={this.handleClick}>
                  Get Instructions
            </button>
        </div>
    );
}
}

export default withRouter(Recipes);