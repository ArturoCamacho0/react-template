// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;