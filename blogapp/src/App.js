import Navbars from './component/Navbar';
import Login from './component/Login';
import PostForRen from './component/Post';
import User from './component/User';
import { Routes, Route } from "react-router-dom";
import ProFileForUser from './component/Profile';
import './App.css';

function App() {
  return (
    <div className="App  "  >
      <Navbars />

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
