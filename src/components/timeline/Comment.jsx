import React, { useState } from "react";
import {
  addCommentFirebase,
  addPostCommentFirebase,
} from "../../services/firebase";

function Comment({ docId, user, comments, type }) {
  const [commentValue, setCommentValue] = useState("");
  const [tempComment, setTempComment] = useState([]);
  // console.log(comments);

  const handleCommentEnter = async (event) => {
    if (event.key === "Enter") {
      const enterComment = async () => {
        type == "post"
          ? await addPostCommentFirebase(docId, user.username, commentValue)
          : await addCommentFirebase(docId, user.username, commentValue);
      };
      if (user) {
        enterComment();
        setTempComment([
          ...tempComment,
          { displayName: user.username, comment: commentValue },
        ]);
        setCommentValue("");
      }
    }
  };

  console.log(tempComment);

  return (
    <div>
      <div className="p-3 flex">
        <img
          src={`/images/avatar/${user?.username}.jpg`}
          alt="logged user pp"
          className="h-8 w-8 rounded-full"
        />
        <input
          type="text"
          className="w-full bg-gray-100 ml-3 px-3 rounded-full "
          placeholder="Write a comment..."
          value={commentValue}
          onChange={({ target }) => setCommentValue(target.value)}
          onKeyPress={handleCommentEnter}
        />
      </div>
      <div className="px-5 pb-3">
        {comments?.map((comment) => (
          <div className="flex my-2">
            <img
              src={`/images/avatar/${comment.displayName}.jpg`}
              className="h-8 w-8 rounded-full"
              alt="profile picture"
            />
            <div className="flex-col mx-3 ">
              <div className="bg-gray-100 rounded-xl p-2">
                <p className="text-sm font-semibold">{comment.displayName}</p>
                <p className="text-sm">{comment.comment}</p>
              </div>
              <div className="flex">
                <p className="text-xs mx-2 font-semibold text-gray-500 cursor-pointer">
                  Like
                </p>
                <p className="text-xs mx-2 font-semibold text-gray-500 cursor-pointer">
                  Reply
                </p>
              </div>
            </div>
          </div>
        ))}
        {tempComment &&
          tempComment.map((comment) => (
            <div className="flex my-2">
              <img
                src={`/images/avatar/${comment.displayName}.jpg`}
                className="h-8 w-8 rounded-full"
                alt="profile pic"
              />
              <div className="flex-col mx-3 ">
                <div className="bg-gray-100 rounded-xl p-2">
                  <p className="text-sm font-semibold">{comment.displayName}</p>
                  <p className="text-sm">{comment.comment}</p>
                </div>
                <div className="flex">
                  <p className="text-xs mx-2 font-semibold text-gray-500 cursor-pointer">
                    Like
                  </p>
                  <p className="text-xs mx-2 font-semibold text-gray-500 cursor-pointer">
                    Reply
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comment;
