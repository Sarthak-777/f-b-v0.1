import useUser from "../hooks/use-user";

function LeftSidebar() {
  const { user } = useUser();
  return (
    <div className="hidden lg:inline-grid lg:col-span-1">
      <div className="fixed top-20 left-5">
        <div className="flex flex-col w-60 pb-2 border-b border-gray-300">
          <div className="flex items-center  my-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img
              src={`/images/avatar/${user?.username}.jpg`}
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
            <p className="ml-3 font-normal text-sm">{user?.fullName}</p>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img
              src="/images/icons/friends.png"
              alt="friends icon"
              className="h-12 w-10 rounded-full"
            />
            <p className="ml-3 font-normal text-sm">Friends</p>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img
              src="/images/icons/saved.png"
              alt="saved icon"
              className="h-10 w-10 rounded-full"
            />
            <p className="ml-3 font-normal text-sm">Saved</p>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img
              src="/images/icons/groups.png"
              alt="groups icon"
              className="h-10 w-10 rounded-full"
            />
            <p className="ml-3 font-normal text-sm">Groups</p>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img
              src="/images/icons/marketplace.png"
              alt="market icon"
              className="h-10 w-10 "
            />
            <p className="ml-3 font-normal text-sm">Marketplace</p>
          </div>
          <div className="flex items-center my-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <img
              src="/images/icons/watch.png"
              alt="watch icon"
              className="h-10 w-10 rounded-full"
            />
            <p className="ml-3 font-normal text-sm">Watch</p>
          </div>
          <div className="flex items-center py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <div className="seeMore mr-2">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <p className="font-normal text-sm">See more</p>
          </div>
        </div>
        <div className="mt-3 w-72">
          <p className="font-semibold text-gray-500">Sponsored</p>
          <div className="flex hover:bg-gray-200 rounded-xl p-2 cursor-pointer ">
            <img
              src="https://scontent.fktm8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p960x960/270285435_23849484575820151_8126348370114894216_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=67cdda&_nc_ohc=sWnK4TSM-YEAX9tEpP5&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_xgpR1SwkX0l5M5J2D7OEF9DscDpj1pXWdhVSjfBmyZA&oe=61E6BA17"
              alt="ad image"
              className="mt-2w-32 h-32"
            />
            <p className="mt-4 flex-wrap ml-3 text-base font-normal">
              Nepal Life insurance company limited
            </p>
          </div>
          <div className="flex mt-4 hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
            <img
              src="https://scontent.fktm8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p960x960/269794130_23849417220770669_2546451444489881738_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=67cdda&_nc_ohc=sD6HcoVca0UAX9cefVE&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_83cFEjp4qUY0OxVzyfcJra44KAD7pP4cyutiqLRvhUQ&oe=61E6A468"
              alt="ad image"
              className="mt-2w-32 h-32"
            />
            <p className="mt-4 flex-wrap ml-3 text-base font-normal">
              Sports wear unisex
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
