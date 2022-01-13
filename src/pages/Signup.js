import { Link, useHistory } from "react-router-dom";
import firebaseContext from "../context/firebase";
import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
import * as ROUTES from "../constants/routes";

function Signup() {
  const { firebase } = useContext(firebaseContext);

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await createUser.user.updateProfile({
        displayName: username,
      });

      await firebase
        .firestore()
        .collection("users")
        .add({
          userId: createUser.user.uid,
          username: username.toLowerCase(),
          fullName: `${firstName} ${surname}`,
          emailAddress: email,
          following: [],
          friends: [],
          dateCreated: Date.now(),
          photos: [],
          posts: [],
        });
      setError("");
      history.push(ROUTES.DASHBOARD);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
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
                  onChange={({ target }) => setFirstName(target.value)}
                  value={firstName}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full m-3 border rounded-md p-3 "
                  onChange={({ target }) => setSurname(target.value)}
                  value={surname}
                />
              </div>

              <input
                type="text"
                placeholder="username"
                className="inputForm ml-3 m-2 "
                onChange={({ target }) => setUsername(target.value)}
                value={username}
              />
              <input
                type="text"
                placeholder="Mobile number or email address"
                className="inputForm ml-3 m-2"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="New Password"
                className="inputForm ml-3 m-2"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
              />
              <p className="text-xs font-extralight m-3">
                By clicking Sign Up, you agree to our Clone policy. This means
                nothing will happen. You may receive SMS notifications from us
                and can opt out at any time.
              </p>
              <div className="text-center">
                {error && <p className="text-sm text-red-500">{error}</p>}
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
