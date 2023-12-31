import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<React.Fragment><Header /><Home /></React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
