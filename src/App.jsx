import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const url =
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data)
      setJoke(data.joke);
      setCategory(data.category)

    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke");
    }
  };

  return (
    <>
      <div
        className="card-container p-1"
        
      >
        <div className="card-body">
          <h5 className="card-title">Random Joke 😁 <span style={{color:'grey'}}> {category}</span></h5>
          <hr />
          <div style={{  }}>
            <p className="card-text">{joke}</p>
          </div>

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={getJoke}
            style={{position:'absolute',top:'80%'}}
          >
            Get Joke
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
