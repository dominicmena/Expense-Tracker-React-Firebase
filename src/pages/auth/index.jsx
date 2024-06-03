import {auth, provider} from '../../config/firebase-config'
import {signInWithPopup} from 'firebase/auth'

export const Auth = () => {

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider)
        const authInfo = {
            userID: results.user.uid //creating an object with a value path to the uid (check console.log(results) for path)
        }
        localStorage.setItem("auth")
    }

  return (
    <div className="login-page">
      <p>Sign in with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Goggle
      </button>
    </div>
  );
};
