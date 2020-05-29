import React, { useState, useEffect } from "react";
import "./App.css";
import Receipe from "./Receipe";

const App = () => {
  const APP_ID = "0902a68a";
  const APP_KEY = "acbeb97a88f55471393957a76014e3c9	";

  const [counter, setCounter] = useState(0);

  const [receipes, setReceipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // is using if you want to load everytime you load the ppage
  // useEffect(() => {
  //   console.log("browsiiiing...");
  // });

  //is loading just first time
  useEffect(() => {
    getReceipes();
  }, [query]);

  const getReceipes = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    setReceipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {receipes.map((receipe) => (
          <Receipe
            key={receipe.recipe.label}
            title={receipe.recipe.label}
            calories={receipe.recipe.calories}
            image={receipe.recipe.image}
            ingredients={receipe.recipe.ingredients}
          />
        ))}
      </div>

      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
