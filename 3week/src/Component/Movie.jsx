const IMG_URL = "https://image.tmdb.org/t/p/w1280/"

function Movie({poster_path, title, vote_average}) {
  return (
    <div className="movie_box">
        <img src={IMG_URL+poster_path} alt="영화 포스터 이미지"/>
        <div className="movie_info">
            <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>
    </div>
  )
}

export default Movie;
