import "./App.css";
import { Router, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="loginpage" element={<LoginPage/>}/>
        <Route path="/login" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
