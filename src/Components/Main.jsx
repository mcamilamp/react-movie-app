import react from "react";

const Main = () => {
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
    </>
  );
};

export default Main;
