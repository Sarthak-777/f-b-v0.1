import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  return (
    <div className="h-screen">
      <div className="h-4/5 bg-gray-100">
        <div className="pt-20 container max-w-screen-lg mx-auto">
          <div className="grid grid-cols-4">
            <div className="col-span-2">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                alt="facebook logo"
                className="w-48 cursor-pointer"
              />
              <div className="ml-5">
                <p className="text-3xl font-light">Recent logins</p>
                <p className="mt-1 text-sm text-gray-500">
                  Click a picture to add your account
                </p>
              </div>
              <div className="mt-7 flex flex-row">
                <div className="flex flex-col ml-5 object-center">
                  <img
                    src="/images/avatar/sarthak.jpg"
                    className="rounded-t-lg w-40"
                  />
                  <div className="border-2 rounded-b-lg flex p-3 justify-center items-center bg-white">
                    <h2>Sarthak</h2>
                  </div>
                </div>
                <div className="flex flex-col ml-5 object-center">
                  <div className="w-40 h-40 border-t-2 border-x-2 rounded-t-lg bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="block m-auto scale-50"
                      viewBox="0 0 20 20"
                      fill="#3379ec"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="border-2 rounded-b-lg flex p-3 justify-center items-center bg-white">
                    <h2 className="text-blue-600">Add Account</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="rounded-xl mx-14 bg-white border-2 mt-16 p-5">
                <form
                  method="POST"
                  className="flex flex-col border-b border-gray-300"
                >
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    className="p-3 border rounded-md "
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="mt-3 p-3 border rounded-md "
                  />
                  <button className="mt-4 w-full h-12 rounded-md bg-fbblue text-white text-xl font-semibold">
                    Log In
                  </button>
                  <p className="m-4 flex justify-center text-blue-500 font-normal text-sm">
                    Forgotten password?
                  </p>
                </form>
                <div className="text-center">
                  <button className="m-4 p-3 bg-green-500 text-white text-md font-semibold rounded">
                    <Link to="/signup">Create a new Account</Link>
                  </button>
                </div>
              </div>
              <a href="https://i-c-fcc.vercel.app/login">
                <p className="ml-28 mt-6">Check out Instagram with this link</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
