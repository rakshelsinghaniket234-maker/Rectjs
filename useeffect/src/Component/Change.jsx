import {useEffect,useState} from"react"
function Change(){
    let[val,setVal] = useState(true)
    return(
        <>
           {val ? <h1>Get ready</h1> : <h1>Not ready</h1>}
           <button onClick={()=>setVal(!val)}>Click here</button>
        </>
    )
}
export default Change