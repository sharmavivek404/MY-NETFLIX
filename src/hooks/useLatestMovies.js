import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addlatestreleased } from "../utils/movieSlice";



const useLatestMovies= () => {
    const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.trakt.tv/movies/trending?page=1",
      API_OPTIONS
    );
    console.log(data);
    const json = await data.json();
    dispatch(addlatestreleased(json));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
}
 
export default useLatestMovies;