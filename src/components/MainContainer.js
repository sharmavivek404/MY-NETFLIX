import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.latestreleased);

    if (!movies || movies.length === 0) return null;

    // Trakt API trending returns objects like { watchers, movie: { title, year, ids } }
    // We need to extract the 'movie' object from the first item.
    const mainMovie = movies[2]?.movie;

    if (!mainMovie) return null;

    const { title, overview } = mainMovie;

    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieTitle={title} />
        </div>
    );
};

export default MainContainer;
