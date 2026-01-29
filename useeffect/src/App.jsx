import {useEffect} from"react"
import {useState} from"react"
import Change from "./Component/Change"
function App(){
  let[val,setval] = useState(0)
  let[num,setNum] = useState(12)
  useEffect(()=>{alert("working")},[num])
  return(
    <>
    <h1>app page</h1>
    <h1>{val}</h1>
    <button onClick={()=>setval(val+1)}>+</button>
    <h1>{num}</h1>
     <button onClick={()=>setNum(90)}>Change</button>
     <Change/>
    </>
  )
}
export default App