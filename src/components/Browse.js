
import Header from "./Header";
import useLatestMovies from "./Hooks/useLatestMovies";
const Browse = () => {
  useLatestMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;