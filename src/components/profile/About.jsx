import React, { useState } from "react";
import { PlusIcon } from "./svgIcons/Icons";
import { addWorkplace } from "../../services/firebase";
import useUser from "../../hooks/use-user";

function About({
  nickname,
  CurrentLocation,
  PermanentLocation,
  college,
  highschool,
  mobileNo,
  relationship,
  workplace: work,
}) {
  //this section is messy and dont recommend coding this way
  const [workplace, setWorkplace] = useState("");
  const [clickWorkplace, setClickWorkplace] = useState(false);

  const [clickHighschool, setClickHighschool] = useState(false);
  const [clickCollege, setClickCollege] = useState(false);
  const [clickLocation, setClickLocation] = useState(false);
  const [clickLiving, setClickLiving] = useState(false);
  const [clickRelationship, setClickRelationship] = useState(false);
  const [clickMobile, setClickMobile] = useState(false);
  const [clickNickname, setClickNickname] = useState(false);

  const { user } = useUser();
  console.log(user.userId);

  const handleInput = (update) => {
    async function handleAddWorkplace() {
      await addWorkplace(update, workplace, user.docId);
    }
    if (user) {
      handleAddWorkplace();
    }
  };

  return (
    <div className="mx-auto w-5/6 min-h-[350px] bg-white rounded-xl shadow-sm m-3">
      <div className="px-5 py-3">
        <h1 className="text-xl font-medium ">About</h1>
        <div className="grid grid-cols-2">
          <div className="m-4 border-r border-gray-300">
            {work ? (
              <div className="flex">
                <p>{work}</p>
              </div>
            ) : (
              <>
                {clickWorkplace ? (
                  <div className="flex flex-col ">
                    <input
                      type="text"
                      placeholder="Add your workplace"
                      className="border p-4 rounded-md focus:outline-none w-4/5"
                      onChange={(e) => {
                        setWorkplace(e.target.value);
                      }}
                      value={workplace}
                    />
                    <div className="flex justify-end w-4/5 m-3">
                      <button
                        className="bg-gray-200 px-3 py-2 mx-2 rounded-md hover:bg-gray-300"
                        onClick={() => setClickWorkplace(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-blue-500 text-white px-3 py-2 mx-2 rounded-md hover:bg-blue-600"
                        onClick={() => {
                          setClickWorkplace(false);
                          handleInput("workplace");
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex items-center cursor-pointer my-6"
                    onClick={() => setClickWorkplace(true)}
                  >
                    <PlusIcon />
                    <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                      Add a workplace
                    </p>
                  </div>
                )}
              </>
            )}

            {clickHighschool ? (
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Add your highschool"
                  className="border p-4 rounded-md focus:outline-none w-4/5"
                />
                <div className="flex justify-end w-4/5 m-3">
                  <button
                    className="bg-gray-200 px-3 py-2 mx-2 rounded-md hover:bg-gray-300"
                    onClick={() => setClickHighschool(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-2 mx-2 rounded-md hover:bg-blue-600"
                    onClick={() => setClickHighschool(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="flex items-center cursor-pointer my-6"
                onClick={() => setClickHighschool(true)}
              >
                <PlusIcon />
                <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                  Add highSchool
                </p>
              </div>
            )}
            {clickCollege ? (
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Add your highschool"
                  className="border p-4 rounded-md focus:outline-none w-4/5"
                />
                <div className="flex justify-end w-4/5 m-3">
                  <button
                    className="bg-gray-200 px-3 py-2 mx-2 rounded-md hover:bg-gray-300"
                    onClick={() => setClickCollege(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-2 mx-2 rounded-md hover:bg-blue-600"
                    onClick={() => setClickCollege(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="flex items-center cursor-pointer my-6"
                onClick={() => setClickCollege(true)}
              >
                <PlusIcon />
                <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                  Add College
                </p>
              </div>
            )}
            {clickLocation ? (
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Add your location"
                  className="border p-4 rounded-md focus:outline-none w-4/5"
                />
                <div className="flex justify-end w-4/5 m-3">
                  <button
                    className="bg-gray-200 px-3 py-2 mx-2 rounded-md hover:bg-gray-300"
                    onClick={() => setClickLocation(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-2 mx-2 rounded-md hover:bg-blue-600"
                    onClick={() => setClickLocation(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="flex items-center cursor-pointer my-6"
                onClick={() => setClickLocation(true)}
              >
                <PlusIcon />
                <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                  Where do you live?
                </p>
              </div>
            )}
            {clickLiving ? (
              <div className="flex flex-col ">
                <input
                  type="text"
                  placeholder="Where are you from?"
                  className="border p-4 rounded-md focus:outline-none w-4/5"
                />
                <div className="flex justify-end w-4/5 m-3">
                  <button
                    className="bg-gray-200 px-3 py-2 mx-2 rounded-md hover:bg-gray-300"
                    onClick={() => setClickLiving(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-2 mx-2 rounded-md hover:bg-blue-600"
                    onClick={() => setClickLiving(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="flex items-center cursor-pointer my-6"
                onClick={() => setClickLiving(true)}
              >
                <PlusIcon />
                <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                  Where are you from?
                </p>
              </div>
            )}
          </div>
          <div className="">
            <div className="flex items-center cursor-pointer my-6">
              <PlusIcon />
              <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                Add a relationship status
              </p>
            </div>
            <div className="flex items-center cursor-pointer my-6">
              <PlusIcon />
              <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                Add your mobile number
              </p>
            </div>
            <div className="flex items-center cursor-pointer my-6">
              <PlusIcon />
              <p className="mx-3 text-sm text-blue-500 font-light hover:underline">
                Add a nickname
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
