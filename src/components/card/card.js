import React from "react";
import "./card.css";

export function Card({ movie }) {
  return (
    <div className="card">
        <span>{movie._id}</span>
      <h2 className="card-title">{movie.title}</h2>
      <p className="card-description">{movie.description}</p>
      <div className="card-footer">
        <span className="card-director">🎬 {movie.director}</span>
        <span className="card-likes">💚 {movie.likes}</span>
      </div>
    </div>
  );
}

export default Card;