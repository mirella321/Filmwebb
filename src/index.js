import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/movies/movies";
import MovieForm from "./pages/movieForm/movieForm";
import MovieDetails from "./pages/movieDetails/movieDetails";
import Nav from "./components/nav/nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/add" element={<MovieForm />}></Route>
          <Route
            path="/movie/:id"
            element={<MovieDetails></MovieDetails>}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
mongodb+srv://sainmirella_db_user:SzQx7KFwIqNpWuvi@cluster0.pu0mk1z.mongodb.net/
*/
