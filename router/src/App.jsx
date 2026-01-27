import {Link, Route,Routes } from "react-router-dom"
import About from "./Component/About"
import Home from "./Component/Home"
import Blog from "./Component/Blog"
import Edit from "./Component/Edit"
import Help from "./Component/Help"
import Navbar from"./Component/Navbar"
import Layout from"./Component/Layout"


function App(){
  return(
    <>
    <Link to='/Home'>Home</Link>
     <Link to='/About'>About</Link>
     <Link to='/Blog'>Blog</Link>
     <Link to='/Edit'>Edit</Link>
     <Link to='/Help'>Help</Link>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path="/About" element={<About/>}/>
       </Routes>

       <Routes>
<Route index element={<Home/>}/>
<Route index element={<About/>}/>
<Route path="/Blog" element={<Blog/>}/>
<Route index element={<Blog/>}/>
<Route path="/Edit" element={<Edit/>}/>
<Route index element={<Edit/>}/>
<Route index element={<Help/>}/>


       </Routes>

       <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="/Home" element={<Home/>} />
         <Route path="/About" element={<About/>} />
        </Route>

       </Routes>
    </>
  )
}
export default App

