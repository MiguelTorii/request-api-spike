import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./components/Parent";
import FramedChild from "./components/FramedChild";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/frame" element={<FramedChild />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
