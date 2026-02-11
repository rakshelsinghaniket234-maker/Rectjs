import {Routes,Route} from "react-router-dom"
import Insert from "./Insert"
import Fetch from "./Fetch"
function App(){
  return(
    <>
      <h1>This is app page</h1>
    
       <Routes>
        <Route index element={<Insert/>}/> 
        <Route path ='/fetch' element={<Fetch/>}/> 
       </Routes>
      
    </>
  )
}
export default App

