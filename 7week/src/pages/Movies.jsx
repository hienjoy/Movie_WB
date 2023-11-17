import React from 'react';
import Movie from "../Component/Movie";
import {movies} from "../movieDummy";

export default function Movies() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <div key={item.id}>
              <Movie
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
              />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}