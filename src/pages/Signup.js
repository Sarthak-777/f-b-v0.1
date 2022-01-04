import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  const handleSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen ">
      <div className="h-4/5 flex flex-col bg-gray-100">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook logo"
          className="w-64 cursor-pointer self-center"
        />
        <div className="h-full mt-5 self-center ">
          <div className="w-[430px] h-[570px] border rounded-lg bg-white">
            <h1 className="mt-3 text-center font-medium text-2xl">
              Create a new account
            </h1>
            <p className="text-sm text-center font-extralight pb-3 border-b border-gray-200">
              It's quick and easy
            </p>
            <form onSubmit={handleSignUp} method="POST">
              <div className="flex">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full m-3 border rounded-md p-3 "
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full m-3 border rounded-md p-3 "
                />
              </div>

              <input
                type="text"
                placeholder="username"
                className="inputForm ml-3 m-2 "
              />
              <input
                type="text"
                placeholder="Mobile number or email address"
                className="inputForm ml-3 m-2"
              />
              <input
                type="password"
                placeholder="New Password"
                className="inputForm ml-3 m-2"
              />
              <p className="text-xs font-extralight m-3">
                By clicking Sign Up, you agree to our Clone policy. This means
                nothing will happen. You may receive SMS notifications from us
                and can opt out at any time.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="m-4 p-3 w-3/6 bg-green-500 text-white text-md font-semibold rounded"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <Link to="/login">
              <p className="text-base text-center text-fbblue">
                Already have an account?
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
