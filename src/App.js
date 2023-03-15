import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";


function App() {
  return (
    <div  className="App">
    <Router >
        <header className="App-header">
          <Link  to="/">
              <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/movies/:movieId" element={<MovieDetails/>} />
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Routes>
        </main>
     </Router>
     </div>
  );
}

export default App;
