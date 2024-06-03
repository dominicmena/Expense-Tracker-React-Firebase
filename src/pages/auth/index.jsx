import {auth, provider} from '../../config/firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import './styles.css'

export const Auth = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider)
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
             //creating an object with a value path to the uid (check console.log(results) for path)
        }
        localStorage.setItem("auth", JSON.stringify(authInfo))
        navigate('/expense-tracker')
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
