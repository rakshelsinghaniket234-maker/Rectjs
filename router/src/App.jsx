import {Link, Route,Routes } from "react-router-dom"
import About from "./Component/About"
import Home from "./Component/Home"
import Blog from "./Component/Blog"
import Edit from "./Component/Edit"
import Help from "./Component/Help"


function App(){
  return(
    <>
    <Link to='/'>Home</Link>
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
<Route index element={<Blog/>}/>
<Route index element={<Edit/>}/>
<Route index element={<Help/>}/>


       </Routes>
    </>
  )
}
export default App
