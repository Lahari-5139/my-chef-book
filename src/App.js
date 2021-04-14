import logo from './logo.svg';
import './App.css';
import Ingredients from './components/ingredients';

function App() {
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

export default App;
