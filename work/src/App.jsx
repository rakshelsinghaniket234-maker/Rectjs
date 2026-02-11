import { Route, Routes } from "react-router-dom"
import Login from "./Component/Login"
import Signup from "./Component/Signup"
//import Complete from "./Component/Complete"


function App() {
  return (
    <>

     <Routes>
      <Route index element = {<Signup/>}/>
      <Route path ="/Login" element = {<Login/>}/>
      
      
     </Routes>

    </>
  )
}

export default App