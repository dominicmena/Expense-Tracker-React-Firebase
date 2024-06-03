import {auth, provider} from '../../config/firebase-config'
import {signInWithPopup} from 'firebase/auth'

export const Auth = () => {

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider)
        console.log(results)
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
