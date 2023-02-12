import React from "react";

const Video = () => {
  return (
    <div className="relative items-center mb-8" style={{ width: "900px", height: "500px" }}>
      <iframe
        src="https://www.youtube.com/embed/nv-ih5tKDzg"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
        className="absolute top-0 left-[50%] w-full h-full"
      />
    </div>
  );
};

export default Video;