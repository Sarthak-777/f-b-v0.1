import React from "react";
import PropTypes from "prop-types";
import { Facebook } from "react-content-loader";
import Post from "./Post";

function Feed({ photos }) {
  console.log(photos);
  return (
    <div className="container my-3">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <Facebook key={index} />
          ))}
        </>
      ) : (
        photos.map((photo) => <Post key={photo.docId} photo={photo} />)
      )}
    </div>
  );
}

export default Feed;

Feed.propTypes = {
  photos: PropTypes.array,
};
