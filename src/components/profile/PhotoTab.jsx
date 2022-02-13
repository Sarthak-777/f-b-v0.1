import React, { useState } from "react";
import { useSelector } from "react-redux";

function PhotoTab() {
  const data = useSelector((state) => state);
  const { photos } = data;
  const [hover, setHover] = useState(false);
  console.log(photos);
  console.log(hover);
  return (
    <div className="mx-auto w-5/6 bg-white rounded-xl shadow-sm">
      <div className="m-3 py-5">
        <h1 className="font-medium text-lg">Photos</h1>
        <div className="p-4 grid grid-cols-4 gap-4">
          {photos?.map((photo) => {
            return (
              <div className="relative group">
                <img
                  src={photo.imageSrc}
                  className={`rounded-md cursor-pointer group-hover:scale-110 transition ease-in-out`}
                />
                <div className="absolute top-0 bottom-0 right-0 left-0 hidden group-hover:flex justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <p className="text-white font-medium text-2xl">
                    {photo.likes.length}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhotoTab;
