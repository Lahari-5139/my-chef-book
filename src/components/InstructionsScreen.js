import React, { Component } from "react";
import '../App.css';
import Recipes from './recipes';
import {withRouter} from 'react-router-dom';

class InstructionsScreen extends Component{
    render(){
        return (
            <div className="App">
              <header className="App-header">
                <h1>ChefBook</h1>
              </header>
              <p className="para">Tell us your ingredients and we will suggest you recipes!</p>
              <h3>Instructions</h3>
              
            </div>
          );
    }
}

export default withRouter(InstructionsScreen);
