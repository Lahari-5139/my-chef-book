import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreen from './components/HomeScreen';
import RecipeScreen from './components/RecipeScreen'; 
import InstructionsScreen from './components/InstructionsScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
      <div className="App">
        <Route exact path="/" component={HomeScreen} /> 
        <Route path="/recipe" component={RecipeScreen} />
        <Route path="/instructions" component={InstructionsScreen} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
