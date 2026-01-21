
function Table(){
    const StudentS =[
        {Sno:1,stname:"aniket",stage:24,Address:"aurangabad",Course:"Btech" },
        {Sno:2,stname:"mayank",stage:22,Address:"newarea",Course:"Btech" },
        {Sno:3,stname:"vishal",stage:23,Address:"nalanda",Course:"Btech"},
        {Sno:4,stname:"suraj",stage:19,Address:"jharkhand",Course:"Btech"},
        {Sno:5,stname:"kanahaiya",stage:21,Address:"patna",Course:"Btech"},
        {Sno:6,stname:"lawkush",stage:25,Address:"nabinagar",Course:"Btech"},
        
    ];
    return(
        
     <table border="">
<thead>
    <tr style={{color:"red"}}>
        <th>S.no</th>
         <th>Student Name</th>
          <th>Student Age</th>
           <th>Address</th>
            <th>Course</th>
    </tr>
</thead>

<tbody>
  {StudentS.map((s)=>(  
<tr>
    
    <td>{s.Sno}</td>
    <td>{s.stname}</td>
    <td>{s.stage}</td>
    <td>{s.Address}</td>
    <td>{s.Course}</td>
</tr>
    

    ))}
</tbody>
     </table>  
        
    );  
}
export default Table

