const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute text-white">
      {/* Left-to-Right gradient for the text */}
      <div className="w-full h-full absolute bg-gradient-to-r from-black"></div>
      
      {/* Top-to-Bottom gradient to blend with the Header */}
      <div className="w-full h-[50%] absolute top-0 bg-gradient-to-b from-black via-black/60 to-transparent"></div>

      <div className="pt-[20%] px-6 md:px-24 absolute w-full h-full">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        {overview && <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>}
        <div className="my-4 md:m-0">
          <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
            ▶ Play
          </button>
          <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
