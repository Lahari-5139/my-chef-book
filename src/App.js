import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen';
import RecipeScreen from './components/RecipeScreen'; 
// import { HashRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
      <div className="App">
        <Route exact path="/" component={HomeScreen} /> 
        <Route path="/recipe" component={RecipeScreen} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
