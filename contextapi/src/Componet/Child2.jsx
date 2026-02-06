import {useContext} from "react"
import {cobject} from "../main"

function Child2(){
    let {name,age,city}=useContext(cobject)
    return(
        <>
        <h1>this is child{name}</h1>
        </>
    )
}
export default Child2
