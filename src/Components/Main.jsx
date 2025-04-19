import react, { useEffect, useState } from "react";
import Card from "./Card";

let API_key = "&api_key=8962b8ebe45e33a912ba4ec65fa246d3";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Romance", "Theatre", "Kids", "Drama", "Comedie"];

const Main = () => {
  const [movieData, setData] = react.useState([]);
  const [url_set, setUrl] = react.useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);
        setData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType == "Popular") {
      setUrl(url);
    } else if (movieType == "Romance") {
      setUrl(base_url + "/discover/movie?with_genres=10749" + API_key);
    } else if (movieType == "Theatre") {
      setUrl(base_url + "/discover/movie?with_genres=28" + API_key);
    } else if (movieType == "Kids") {
      setUrl(base_url + "/discover/movie?with_genres=10751" + API_key);
    } else if (movieType == "Drama") {
      setUrl(base_url + "/discover/movie?with_genres=18" + API_key);
    } else if (movieType == "Comedie") {
      setUrl(base_url + "/discover/movie?with_genres=35" + API_key);
    } else {
      setUrl(url);
    }
  };

  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url = base_url + "/search/movie?query=" + search + API_key;
      setUrl(url);
      setSearch("");
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value) => {
              return (
                <li>
                  <a
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <form action="">
          <div className="search-btn">
            <input
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
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
        {movieData.length == 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};

export default Main;
