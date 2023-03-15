import { Route, Router } from 'react-router-dom';
import './App.css';
import MoviesGrid from './components/MoviesGrid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className={"App-title"}>APP PLAYER MOVIES</h1>
      </header>
      <main>
        <MoviesGrid/>
        <Router>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
