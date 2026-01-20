 
function Map(){
    
        let student = [
            {
                name:"aniket",age:25,
            },
            {
                name:"aniket",age:25, 
            },
            {
                 name:"aniket",age:25,
            }
        ]


    
    return(
        <>
        {
            student.map((e)=>(<h1>{e.name}</h1>))
        }
        </>
    )
}
export default Map
