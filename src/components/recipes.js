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
}
render(){
    return(
        <div>
            <h3>Recipes Soooon!!</h3>
        </div>
    );
}
}

export default withRouter(Recipes);