import Navbars from './component/Navbar';
import Login from './component/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbars />

      <Routes className="main">

      <Route path="/login" element={<Login />} />
      
      </Routes>
    </div>
  );
}

export default App;
