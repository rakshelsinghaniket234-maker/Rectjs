import axios from "axios"
import { useEffect, useState } from "react"

function App(){

   let [apidata,setApidata] = useState([])
   
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    //.then((res)=>console.log(res.data))
    .then((res)=>setApidata(res.data))
  },[])
  return(
    <>
     <h1>This is app page</h1>
     {
        apidata.map((e) => (
          <>
          <h1>{e.id}</h1>
          <h1>{e.title}</h1>
          <h>{e.body}</h>
          </>
        ))
      }
    </>
  )
}
export default App

