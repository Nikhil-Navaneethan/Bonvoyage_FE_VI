import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export let Register = () => {
    let [data,setData] = useState({
        Name:"",
        MobileNumber: "",
        Email: "",
        Passcode:""
    }) 
    let Data = (event) => {
    let {name,value} = event.target
    setData({...data,[name]:value})
    console.log(name,value);
    }


    let handleSubmit = () => {
        let register = {
            Name: data.Name,
            MobileNumber: data.MobileNumber,
            Email: data.Email,
            Passcode: data.Passcode

        }
            fetch("http://localhost:8080/reg/add", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                body: JSON.stringify(register)
            })  
                .then(Response => {
                    console.log("Data Received" + Response);
                })
        }
    
  return (
    <div>
        <form>
            <label>Name</label>
            <input type='text' name="Name" value={data.Name} onChange={Data}/><br></br>
            <label>Mobile Number</label>
            <input type='tel' pattern="[0-9]{5}-[0-9]{5}" name='MobileNumber' value={data.MobileNumber} onChange={Data}/><br></br>
            <label>E-mail</label>
            <input type='text' name='Email' value={data.Email} onChange={Data} /><br></br>
            <label>Passcode</label>
            <input type='password' minlength="8" maxlength="15" name='Passcode' value={data.Passcode} onChange={Data}/><br></br>
            <button onClick={handleSubmit}>Create my account</button><br></br>
            <Link to="/l">Already have an account</Link>
        </form>
    </div>
  )
}
export default Register;
