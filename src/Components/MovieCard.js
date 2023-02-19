import React from "react";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card flex-row">
        <div
          className="bg-image hover-overlay ripple "
          data-mdb-ripple-color="light"
        >
          <img className="poster" src={movie.posterURL} />
        </div>
        <div className="card-body">
          <h5 className="title">{movie.title}</h5>
          <p className="description">{movie.description}</p>
          <p className="movie__detail">
            <span className="icons icons-yellow">
              <i className="fas fa-file-invoice-dollar">
                <Link to={`/movie/${movie.id}`}>{movie.trailer}</Link>
              </i>
            </span>
          </p>
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={movie.rating}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
