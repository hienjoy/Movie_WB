import Movie from "./Component/Movie/Movie";
import {movies} from "./movieDummy";
import * as M from "./Component/Movie/Movie.style";

function App() {
  return (
    <M.bg>
      <M.app_container>
        {
          movies.results.map((item) => {
            return (
              <Movie 
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
              />
            )
          })
        }
      </M.app_container>
    </M.bg>
  );
}

export default App;
