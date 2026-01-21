import{useState} from "react"
function Photochange(){
    let [photo,photoSet] = useState(<img src="haa.jpg" alt=""height="200px"/>)
    return(
        
        <>

      <h1>{photo}</h1>

       <button onClick={() => photoSet(<img src="hm.jpg" alt="" height="1000px" />)}>Tiger</button>
      <button onClick={() => photoSet(<img src="hii.jpg" alt="" height="1000px" />)}>Nature</button>
      <button onClick={() => photoSet(<img src="haa.jpg" alt="" height="800px" />)}>Flower</button>
      <button onClick={() => photoSet(<img src="hy.jpg" alt="" height="800px" />)}>Flower2</button>
        </>
    )
}
export default Photochange