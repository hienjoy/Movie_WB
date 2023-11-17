import { useNavigate } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w1280/"

function Movie(props) {
  const navigate = useNavigate();
  
  const onClickImg = ()=>{
    navigate(`/movie/${props.title}`,{state:props});
  };
  
  return (
    <div className="movie_box" onClick={onClickImg}>
        <img src={IMG_URL+props.poster_path} alt="영화 포스터 이미지"/>
        <div className="movie_info">
            <h4>{props.title}</h4>
            <span>{props.vote_average}</span>
        </div>
    </div>
  )
}

export default Movie;
