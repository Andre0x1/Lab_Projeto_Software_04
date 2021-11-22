import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import User from "./User";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<User />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
