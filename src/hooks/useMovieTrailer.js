import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieTitle) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    const getMovieVideos = async () => {
        if (!movieTitle) return;
        try {
            const data = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(movieTitle + " official movie trailer")}&type=video&key=${YOUTUBE_API_KEY}`
            );
            const json = await data.json();
            
            if (json.items && json.items.length > 0) {
                const videoId = json.items[0].id.videoId;
                dispatch(addTrailerVideo({ key: videoId }));
            }
        } catch (error) {
            console.error("Error fetching trailer from YouTube:", error);
        }
    };

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, [movieTitle]);
};

export default useMovieTrailer;
