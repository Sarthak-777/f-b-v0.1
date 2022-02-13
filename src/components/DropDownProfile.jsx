import { useContext } from "react";
import firebaseContext from "../context/firebase";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import PropTypes from "prop-types";

function DropDownProfile({ loggedUser: user, profileImg, profile, display }) {
  const history = useHistory();
  const { firebase } = useContext(firebaseContext);

  const handleLogOut = async () => {
    if (user) {
      try {
        await firebase.auth().signOut();
        history.push(ROUTES.LOGIN);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className={`fixed  right-3 z-50 ${!display ? "hidden" : null}`}>
      <div className="h-[450px] w-[360px] bg-white rounded-xl border border-gray-200 shadow-sm ">
        <div className="py-2 mx-4 border-b border-gray-300 ">
          <Link to={`/p/${profileImg}`}>
            <div className="flex p-2 w-full hover:bg-gray-100 rounded-xl cursor-pointer">
              <img
                src={`/images/avatar/${profileImg}.jpg`}
                className="rounded-full h-16 w-16"
              />
              <div className="ml-4 flex flex-col justify-center">
                <p className="font-medium">{profile}</p>
                <p className="text-sm font-extralight">See your profile</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="py-2 mx-4 border-b border-gray-200">
          <div className="flex p-2 w-full hover:bg-gray-100 rounded-xl cursor-pointer">
            <div className="m-1 h-8 w-8 flex justify-center items-center rounded-full bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 flex flex-col">
              <p className="text-base font-light">Give feedback</p>
              <p className="text-xs font-extralight">
                Help me improve this clone
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 mx-4">
          <div className="flex p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
            <div className="logOutMenuIconsDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full ml-3 flex justify-between items-center">
              <p className="font-light">Settings & privacy</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
            <div className="logOutMenuIconsDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full ml-3 flex justify-between items-center">
              <p className="font-light">Help & support</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div className="flex p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
            <div className="logOutMenuIconsDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
            <div className="w-full ml-3 flex justify-between items-center">
              <p className="font-light">Dark Mode</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div
            className="flex p-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            onClick={handleLogOut}
          >
            <div className="logOutMenuIconsDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>

            <p className="ml-3 flex items-center font-light">Log Out</p>
          </div>
        </div>
        <div className="mx-6 flex flex-wrap">
          <p className="text-xs mx-2 font-thin">Facebook</p>
          <p className="text-xs mx-2 font-thin">Instagram</p>
          <p className="text-xs mx-2 font-thin">Firebase</p>
          <p className="text-xs mx-2 font-thin">React</p>
          <p className="text-xs mx-2 font-thin">Firestore</p>
          <p className="text-xs mx-2 font-thin">Tailwind</p>
          <p className="text-xs mx-2 font-thin">Github</p>
          <p className="text-xs mx-2 font-thin">Redux</p>
        </div>
      </div>
    </div>
  );
}

export default DropDownProfile;

DropDownProfile.propTypes = {
  loggedUser: PropTypes.object,
  profileImg: PropTypes.string,
  profile: PropTypes.string,
  display: PropTypes.bool,
};
