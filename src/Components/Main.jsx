import react, { useEffect, useState } from "react";
import Card from "./Card";

let API_key = "&api_key=8962b8ebe45e33a912ba4ec65fa246d3";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

const Main = () => {
  const [movieData, setData] = react.useState([]);
  const [url_set, setUrl] = react.useState(url);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
      });
  }, [url_set]);

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Theatre</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Comedie</a>
            </li>
          </ul>
        </nav>

        <form action="">
          <div className="search-btn">
            <input
              className="inputText  "
              type="text"
              placeholder="Enter Movie Name"
            />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Main;
