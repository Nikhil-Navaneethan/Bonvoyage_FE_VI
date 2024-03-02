import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export let Register = () => {
    let [data,setData] = useState({
        name:"",
        mobileNumber: "",
        email: "",
        passcode:""
    }) 
    let Data = (event) => {
    let {name,value} = event.target
    setData({...data,[name]:value})
    console.log(name,value);
    }


    let handleSubmit = () => {
        let register = {
            name: data.name,
            mobileNumber: data.mobileNumber,
            email: data.email,
            passcode: data.passcode

        }
            fetch("http://localhost:8080/register/add", {
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
    <div  className='bg-info text-center'>
        <div className='box'>
        <form>
            <input type='text' placeholder="Name" name="name" value={data.name} onChange={Data}/><br></br>
            <input type='tel' placeholder="Mobile Number" pattern="[0-9]{5}-[0-9]{5}" name='mobileNumber' value={data.mobileNumber} onChange={Data}/><br></br>
            <input type='text' placeholder="Email" name='email' value={data.email} onChange={Data} /><br></br>
            <input type='password' placeholder="Password" minLength="8" maxLength="15" name='passcode' value={data.passcode} onChange={Data}/><br></br><br></br>
            <button className="btn btn-info" onClick={handleSubmit}>Create my account</button><br></br>
            <Link to="/l">Already have an account</Link>
        </form>
    </div>
    </div>
  )
}
export default Register;
