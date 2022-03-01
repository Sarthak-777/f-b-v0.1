import React, { useEffect } from "react";
import useUser from "../../hooks/use-user";
import { getProfileInfo } from "../../services/firebase";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const { user } = useUser();
  const { userData } = useSelector((state) => state.user);

  const editInfoSettings = () => {};

  return (
    <div className="sticky top-16 col-span-2 bg-white rounded-lg h-72 shadow-md my-5">
      <h1 className="mx-5 mt-5 text-xl font-semibold">Intro</h1>
      <div className="flex flex-col mx-5 my-3">
        <div className="flex items-center my-2">
          <img
            src="/images/icons/workIcon.png"
            alt="work icon"
            className="h-8 w-16 mx-[-20px] mr-[-6px]"
          />
          <h1 className="text-sm flex ">
            Works in <p className="mx-1 font-semibold">{userData?.workplace}</p>
          </h1>
        </div>
        <div className="flex items-center my-2">
          <img
            src="/images/icons/homeIcon.png"
            alt="work icon"
            className="h-6 w-6 mr-3"
          />
          <h1 className="text-sm flex ">
            Lives in <p className="mx-1 font-semibold">Lalitpur, Nepal</p>
          </h1>
        </div>
        <div className="flex items-center my-2">
          <img
            src="/images/icons/locationIcon.png"
            alt="work icon"
            className="h-6 w-6 mr-3"
          />
          <h1 className="text-sm flex ">
            From <p className="mx-1 font-semibold">Lalitpur, Nepal</p>
          </h1>
        </div>
        <div className="absolute bottom-8 mx-3 left-5 right-6">
          <button
            className="bg-gray-200 w-full text-sm font-semibold p-2 rounded-lg hover:bg-gray-300"
            onClick={editInfoSettings}
          >
            Edit details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
