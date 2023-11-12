import * as M from './Movie.style'

const IMG_URL = "https://image.tmdb.org/t/p/w1280/"


function Movie({poster_path, title, vote_average, overview}) {
  return (
    <M.movie_box>
      <M.movie_img src={IMG_URL+poster_path} alt="영화포스터"/>
      <M.movie_info>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </M.movie_info>
    </M.movie_box>
  )
}

export default Movie