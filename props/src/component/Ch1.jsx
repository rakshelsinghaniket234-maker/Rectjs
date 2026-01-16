import Ch2 from "./Ch2" 
function Ch1(props){
    return(
        <>
        <h1>Child 1 page</h1>
        <Ch2 city={props.city}/>
        </>
    )
}
export default Ch1