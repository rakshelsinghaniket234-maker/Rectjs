import { useState } from "react"

function Hooks(){

    let [num,setnum] = useState(20)
    let [color,setColor] = useState()

    function fun (){
        setnum("updated value is 30")
    }
    return(
        <>
         <h1>Hook page ={num} </h1>
         <button onClick={fun}>change</button> <hr />

         <button onClick={()=>setnum("update")}>tap</button>
         

        <h1>0</h1>
         <button>+</button>
         <button>-</button>
         <hr/>
          <div style={{backgroundColor:color,height:"300px"}} >
            <button onClick={()=>setColor('red')}>red</button>
            <button onClick={()=>setColor('yellow')}>yellow</button>
            <button onClick={()=>setColor('green')}>green</button>
            <button onClick={()=>setColor('black')}>black</button>
            
         </div>

         
        </>
    )
}
export default Hooks
