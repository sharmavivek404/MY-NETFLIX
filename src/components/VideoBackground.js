import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieTitle }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieTitle);

  return (
    <div className="w-full aspect-video overflow-hidden">
      {trailerVideo?.key ? (
        <iframe
          className="w-[135%] aspect-video max-w-none -ml-[17.5%] -mt-[9.84%]"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&cc_load_policy=0&loop=1&playlist=" + trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <div className="w-screen aspect-video bg-black"></div>
      )}
    </div>
  );
};

export default VideoBackground;
