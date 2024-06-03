import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Auth} from "./pages/auth/index"
import { ExpenseTracker } from "./pages/expense-tracker/index";


function App() {
  return ( 
    <div className="App">

    <Router>
      <Routes>
        <Route path="/" exact element={<Auth />}/>
        <Route path="/expense-tracker" element={<ExpenseTracker />}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;


// Project Console: https://console.firebase.google.com/project/expense-tracker-5e835/overview
//Hosting URL: https://expense-tracker-5e835.web.app