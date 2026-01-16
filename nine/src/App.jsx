import Navbar from "./Components/Navbar"
import Button from "./Components/Button"
import H from "./Components/Home"
import About from "./Components/About"
 



function App(){
  let name = "Aniket"
  let name2 = "Mayank"
  let name3 = "vishal"
  let name4 = "suraj"
  let name5 = "lawkush"
  let person = {
    pname : "aniket",
    age:24,
    contract:6287627133
    
    }
    let mystyle={
      backgroundColor:"tomato",
      color:"white",
      padding:"20px"
  }
  return(
    <>
    <Navbar/>
    <Button/>
    {/* <h1 style={{backgroundColor:"yellow"}}>welcome to react class</h1>
    <h1 style={{backgroundColor:"white"}}>welcome to react class</h1>
    <h1 style={mystyle}>welcome to react class</h1>
    
    <H/>
    <About/>
    <h1>{name}</h1>
    <h1>{name2}</h1>
    <h1>{name3}</h1>
    <h1>{name4}</h1>
    <h1>{name5}</h1>
    <h1>my name is {person.pname}</h1> */}

    
</>
    
    
  )
}
export default App 

