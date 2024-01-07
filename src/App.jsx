import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path="/" element = {<Home/>} />
        
      </Routes>
    </>
  );
}

export default App;
