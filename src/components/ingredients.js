import React, { Component } from "react";
import '../App.css';

class Ingredients extends Component{

    state = {
        ingredients_array: []
    };
    render()
    {
        return(
            <div>
               <h3 className='h3-content'>Enter the ingredients available: </h3>
               <input type='text'></input>
            </div>
        );
    }
}

export default Ingredients;