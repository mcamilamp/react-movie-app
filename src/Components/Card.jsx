import React from "react";

const Card = ({ movie }) => {
  return (
    <>
      <div className="movie">
        <img src="images/poster.jpg" alt="" className="poster" />
        <div className="movie-details">
          <div className="box">
            <h4 className="title">Movie Title</h4>
            <p className="rating">9.7</p>
          </div>
          <div className="overview">
            <h1>Overview</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iusto
            repellendus esse eius neque non atque iste voluptatibus laborum.
            Voluptate aperiam quia!
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
