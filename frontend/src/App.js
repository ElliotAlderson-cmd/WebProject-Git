import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Categories from "./components/categories/Categories";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import About from "./pages/about/About";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  const user = true; 
  return (
      <>
        <BrowserRouter>
        <Topbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={user ? <Home /> : <Register />} />
            <Route path="login" element={user ? <Login/> : <Register/>}/>
            <Route path="categories" element={user? <Categories/> : <Register/>}/>
            <Route path="about" element={<About/>}/>
          </Routes>  
        </BrowserRouter>
      </>
  );
}

export default App;
