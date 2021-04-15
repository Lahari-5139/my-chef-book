import React, { Component } from "react";
import '../App.css';
import Ingredients from './ingredients';
import {withRouter} from 'react-router-dom';

class HomeScreen extends Component{
    render(){
        return (
            <div className="App">
              <header className="App-header">
                <h1>ChefBook</h1>
              </header>
              <p className="para">Tell us your ingredients and we will suggest you recipes!</p>
              <Ingredients/>
              
            </div>
          );
    }
}

export default withRouter(HomeScreen);