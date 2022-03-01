import React, { useState } from "react";
import PropTypes from "prop-types";
import ThreeDots from "./svgIcons/threeDots";
import useUser from "../../hooks/use-user";
import {
  handleLoggedUserFriends,
  handleLikesFirebase,
  handlePostLikesFirebase,
} from "../../services/firebase";
import Comment from "./Comment";
import { Link } from "react-router-dom";

function Post({ photo }) {
  console.log(photo);
  const [commentBox, setCommentBox] = useState(false);
  const [likedPhoto, setLikedPhoto] = useState(photo.userLikedPhoto);
  const [likes, setLikes] = useState(photo.likes.length);
  // const [] = useState

  const { user } = useUser();
  // console.log(user);

  const handleLikedPhotos = () => {
    setLikedPhoto(!likedPhoto);
    const handleLikes = async () => {
      photo.type == "post"
        ? await handlePostLikesFirebase(photo.docId, user.userId, likedPhoto)
        : await handleLikesFirebase(photo.docId, user.userId, likedPhoto);
    };
    if (user) {
      handleLikes();
      setLikes((likes) => (likedPhoto ? likes - 1 : likes + 1));
    }
  };

  const handleComments = () => {
    setCommentBox(!commentBox);
  };

  return (
    <div className="my-4 w-full rounded-lg bg-white ">
      <div className="px-3 py-2 flex justify-between items-center">
        <Link to={`/p/${photo.username}`}>
          <div className=" flex items-center">
            <img
              src={`/images/avatar/${photo.username}.jpg`}
              className="rounded-full h-10 w-10"
              alt="profile picture"
            />
            <p className="text-sm font-semibold px-2">{photo.username}</p>
          </div>
        </Link>
        <div className="flex items-center">
          <ThreeDots />
        </div>
      </div>
      {photo.type == "post" ? (
        <p className="text-xl px-4 mx-1">{photo.post}</p>
      ) : (
        <div>
          <p className="px-3 text-sm ">{photo.caption}</p>
          <img
            src={photo.imageSrc}
            alt="uploaded photo"
            className="max-h-[650px] w-full"
          />
        </div>
      )}
      <div className="py-3 mx-4 flex justify-between border-b ">
        <div className="flex items-center">
          <img
            src="/images/icons/like.png"
            alt="like emoji"
            className="h-5 w-5"
          />
          <p className="px-3 text-sm font-extralight">{likes}</p>
        </div>
        <div className="flex items-center">
          <p
            className="text-sm font-extralight cursor-pointer hover:underline"
            onClick={handleComments}
          >
            {photo.comments.length} Comments
          </p>
        </div>
      </div>
      <div className="flex justify-around py-1 mx-4 border-b">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLikedPhotos}
        >
          <img
            src="/images/icons/like-underline.png"
            alt="like"
            className="h-6 w-6"
          />
          <p className="text-sm font-extralight px-1">like</p>
        </div>
        <div
          className="flex items-center my-1 cursor-pointer"
          onClick={handleComments}
        >
          <img
            src="/images/icons/comment-outline.png"
            alt="comment"
            className="h-5 w-5"
          />
          <p className="text-sm font-extralight px-1">comment</p>
        </div>
        <div className="flex items-center my-1 cursor-pointer">
          <img
            src="/images/icons/share-outline.png"
            alt="share"
            className="h-6 w-6"
          />
          <p className="text-sm font-extralight px-1">share</p>
        </div>
      </div>
      {commentBox ? (
        <Comment
          docId={photo.docId}
          user={user}
          comments={photo.comments}
          type={photo.type}
        />
      ) : null}
    </div>
  );
}

export default Post;

Post.propTypes = {
  photo: PropTypes.shape({
    caption: PropTypes.string,
    comments: PropTypes.array,
    dateCreated: PropTypes.number,
    docId: PropTypes.string,
    imageSrc: PropTypes.string,
    likes: PropTypes.array,
    photoId: PropTypes.number,
    userId: PropTypes.string,
    userLatitude: PropTypes.string,
    userLikedPhoto: PropTypes.bool,
    userLongitude: PropTypes.string,
    username: PropTypes.string,
  }),
};
