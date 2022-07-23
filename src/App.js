import Navbars from './component/Navbar';
import Login from './component/Login';
import PostForRen from './component/Post';
import User from './component/User';
import { Routes, Route } from "react-router-dom";
import ProFileForUser from './component/Profile';
import './App.css';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  return (
    <div className="App  "  >

      <Navbars />
      <h1>blog-add</h1>
      <a onClick={()=>{
        navigate("/login")
      }}>Login</a>

      <Routes className="main  container">
        <Route path="/post" element={<PostForRen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<ProFileForUser />} />
      </Routes>
    </div>
  );
}

export default App;
