import React from 'react';
import {tvs} from "../tvDummy";

const IMG_URL = "https://image.tmdb.org/t/p/w1280"

export default function TV() {
  return (
    <div className="App">
      <div className="app-container">
        {
          tvs.results.map((item) => {
            return (
              <div className="movie_box" key={item.id}>
              <img src={IMG_URL+item.backdrop_path} alt="tv 이미지"/>
              <div className="movie_info">
                  <h4>{item.name}</h4>
                  <span>{item.vote_average}</span>
              </div>
          </div>
            )
          })
        }
      </div>
    </div>
  );
}