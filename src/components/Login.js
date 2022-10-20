// import { signInWithGoogle } from "../services/firebase"

import { auth } from "../services/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = ({ data, authGoogle }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        authGoogle(true)
       data(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="p-2 rounded-sm bg-green-500 text-white m-14"
      >
        Sign In With Google
      </button>
    </div>
    //
  );
};

export default Login;
