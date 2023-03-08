import * as React from 'react';

import { useState} from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [block, setBlock] = useState("");
  const [status, setStatus] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/h/put",

                { id:id,
                  name:name,
                  age:age,
                  department:department,
                  block:block,
                  status:status
           
                   });
                     alert("Sucessfully.");
                     setId("");
                     setName("");
                     setAge("");
                     setDepartment("");
                     setBlock("");
                     setStatus("");
                   }
               catch(err)
                   {
                     alert("Failed");
                   }
              }
    return (
        <div>
           
           <center ><h2>Update The Details</h2></center>
            <div class="container mt-4"  style={{ display: 'block', 
        width: 500, 
        padding: 30 }}></div>
         <br/> 
        <form>
        <div class="form-group">
       <center> <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/></center>
        <br></br>
            <label><span>Name</span></label>
            <input type="text" class="form-control"  placeholder="Type your name.."
             value={name}
            onChange={(event) =>
              {
                setName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Age</span></label>
            <input type="text" class="form-control"  placeholder="Type your Age.."
             value={age}
            onChange={(event) =>
              {
                setAge(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Department</span></label>
            <input type="text" class="form-control"  placeholder="Type your Department.."
             value={department}
             onChange={(event) =>
               {
                setDepartment(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Block</span></label>
            <input type="text" class="form-control"  placeholder="Type your Block.."
             value={block}
             onChange={(event) =>
               {
                setBlock(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Status</span></label>
            <input type="text" class="form-control"  placeholder="Type your Status.."
            value={status}
            onChange={(event) =>
              {
                setStatus(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
                
            </form>
            

        </div>
    );
}