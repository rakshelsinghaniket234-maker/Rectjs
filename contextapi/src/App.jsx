import { createContext } from "react"
import Child1 from './Componet/Child1'
 
 let  createobject = createContext()
 let name = "aniket"
function App(){
  return(
    <>
     {/* <createobject.Provider value={name}>  */}
       <Child1/>
     {/* </createobject.Provider> */}
    </>
  )
}
export default App
export {createobject}