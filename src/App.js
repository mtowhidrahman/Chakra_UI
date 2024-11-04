import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/videos"} element={<Videos />}/>
        <Route path={"/uploadvideos"} element={<Upload />}/>
        <Route path={"/signup"} element={<SignUp />}/>
        <Route path={"/login"} element={<Login />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
