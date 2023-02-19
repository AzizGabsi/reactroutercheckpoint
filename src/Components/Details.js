import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = ({ movie }) => {
  const { id } = useParams();
  const foundMovie = movie.find((el) => el.id === +id);
  return (
    <div className="detail">
      <div style={{ textAlign: "center", backgroundColor: "black" }}> </div>
      <div className="title"
        style={{
          fontSize: 30,
          color: "red",
          fontSize: "x-large",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {foundMovie.title}
      </div>
      <iframe
        className="trailerVid"
        width="560"
        height="315"
        src={foundMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div
        style={{
          fontSize: 30,
          color: "red",
          fontSize: "x-large",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        DESCRIPTION
      </div>
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          width: "50%",
          fontSize: "large",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        {foundMovie.description}
      </div>
      <Link to={"/"}>
        <Button
          className="btn btn-primary"
          style={{
            color: "white",
            fontSize: "large",
            marginLeft: "20px",
          }}
        >
          Home
        </Button>
      </Link>
    </div>
  );
};
export default Details;
