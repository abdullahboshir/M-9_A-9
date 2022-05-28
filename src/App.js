import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path = '/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/review' element = {<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
