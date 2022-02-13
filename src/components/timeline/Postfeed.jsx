import React, { useState } from "react";
import PropTypes from "prop-types";
import { submitInput } from "../../services/firebase";
import nextId from "react-id-generator";

function Postfeed({ username, userId }) {
  const [inputField, setInputField] = useState("");
  const id = nextId();

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      const handleSubmit = async () => {
        const response = await submitInput(inputField, userId, id);
      };
      handleSubmit();
      setInputField("");
    }
  };

  return (
    <div className="mt-10 ">
      <div className="h-32 w-full bg-white rounded-lg ">
        <div className="flex py-4 mx-5 border-b ">
          <img
            src={`/images/avatar/${username}.jpg`}
            alt="profile picture"
            className="h-10 w-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind, Sarthak?"
            className="ml-4 bg-gray-100 px-3 w-full rounded-full"
            onChange={(e) => setInputField(e.target.value)}
            onKeyPress={handleEnterKey}
            value={inputField}
          />
        </div>
        <div className="mt-3 flex justify-evenly">
          <div className="flex items-center">
            <img
              src="/images/icons/video-icon.png"
              alt="video icon"
              className="h-6 w-6"
            />
            <p className="ml-2 text-sm font-semibold text-gray-500">
              Live Video
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/images/icons/images-icon.png"
              alt="video icon"
              className="h-6 w-6"
            />
            <p className="ml-2 text-sm font-semibold text-gray-500">
              Photo/Video
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/images/icons/smiley-icon.png"
              alt="video icon"
              className="h-6 w-6"
            />
            <p className="ml-2 text-sm font-semibold text-gray-500">
              Chat Activity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postfeed;

Postfeed.propTypes = {
  username: PropTypes.string.isRequired,
};
