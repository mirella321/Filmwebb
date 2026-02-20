import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/card/nav/nav";
import Movies from "./pages/movies/movies";
import MovieForm from "./pages/movieForm/movieForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/add" element={<MovieForm />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
