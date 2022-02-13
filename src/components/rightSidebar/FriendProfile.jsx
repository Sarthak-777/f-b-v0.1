import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FriendProfile({ username }) {
  return (
    <div className="cursor-pointer flex my-3 p-2 items-center w-full rounded-md hover:bg-gray-200">
      <img
        src={`/images/avatar/${username}.jpg`}
        alt="contact profile picture"
        className="h-10 w-10 rounded-full "
      />

      <p className="ml-3 text-sm">{username}</p>
    </div>
  );
}

export default FriendProfile;

FriendProfile.propTypes = {
  fullName: PropTypes.string,
  username: PropTypes.string,
};
