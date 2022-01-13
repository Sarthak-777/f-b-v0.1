import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJoT-2xatMQJazTSLP6Wmg9g1Grjvdk1M",
  authDomain: "facebook-clone-e5fc9.firebaseapp.com",
  projectId: "facebook-clone-e5fc9",
  storageBucket: "facebook-clone-e5fc9.appspot.com",
  messagingSenderId: "33958332903",
  appId: "1:33958332903:web:864297b9a5dfc9cf1f1542",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
