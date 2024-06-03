// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMkWkYto9adJwQOCFsbbOWAjs2MfaLMJw",
  authDomain: "expense-tracker-5e835.firebaseapp.com",
  projectId: "expense-tracker-5e835",
  storageBucket: "expense-tracker-5e835.appspot.com",
  messagingSenderId: "996492867291",
  appId: "1:996492867291:web:1f04c8ac4a08967caabefe",
  measurementId: "G-M62F3T6KLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//CLI:
// firebase login
//firebase init 
//firebase deploy