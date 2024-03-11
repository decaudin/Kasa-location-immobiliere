import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/style/index.scss";
import Home from "./pages/Home";
import LodgementRetail from "./pages/LodgementRetail";
import About from "./pages/About";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="all">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/lodgement/:id" element={<LodgementRetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </React.StrictMode>
);
