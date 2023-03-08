import React,{ useEffect,useState} from "react";
import './getform.css';
import axios from "axios";
function DataBaseView(){
    const [content, addContent]=useState([]);
    useEffect(()=>{

    axios.get('http://localhost:8080/h/get').then(function (response) {
    
    addContent(response.data);
    });
    })
    return(
        <div className="grid">
        <div className="min">
        <div>
            <table className="table caption-top vino">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Department</th>
                    <th scope="col">Block</th>
                    <th scope="col">Status</th>
                </thead>
                <tbody>
                {content.map((value)=>(
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.department}</td>
                        <td>{value.block}</td>
                        <td>{value.status}</td>
                    </tr>
                ))}
                    </tbody>
            </table>
            </div>
        </div>
        </div>
        
    )
}
export default DataBaseView;