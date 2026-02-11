import axios from "axios"
import { useEffect, useState } from "react"

function Fetch(){
   let[data ,setData] = useState([])

   useEffect(()=>{
    axios.get('http://localhost:3000/userdata')
    .then((r)=>setData(r.data))
   },[])
  return(
    <>
      <h1>This is Fetch page</h1>
      <h1>get data</h1>

      <table border="">
        <tr>
          <th>Id</th>
          <th>name</th>
          <th>city</th>
          <th>age</th>
          <th>contact</th>
        </tr>
      {
        data.map((e)=>( <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.city}</td>
          <td>{e.age}</td>
          <td>{e.contact}</td>
        </tr> ))
      }  
      </table>
    </>
  )
}
export default Fetch