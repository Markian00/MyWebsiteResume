import React from "react"
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Projects from "./pages/Projects"
import Academics from "./pages/Academics";
import Resume from "./pages/Resume.js"
import NavB from "./components/NavB"
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {

    return (
        <>
        <Router>
            <NavB/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Academics" element={<Academics/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Projects" element={<Projects/>}/>
            </Routes>
            <Footer/>
        </Router>
        </>


        /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
         */
    );
}

export default App;
