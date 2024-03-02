import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Entry.css';

export let Login = () => {
  const navigate = useNavigate();
  let [data1,setData1] = useState({
       
    email: "",
    passcode:""
}) 
let Data1 =(event) =>{
    let {name,value}=event.target; 
    console.log('Data1---->',name,"===",value)

    setData1({...data1,[name]:value})
    console.log(name,value);
}
const handleSubmit1 =(event) =>{
    event.preventDefault();
    console.log(data1);
    // const Check ={
    //   username:data1.email,
    //   password:data1.passcode
    // }
    fetch(`http://localhost:8080/register/check?email=${data1.email}&passcode=${data1.passcode}` ) 
    .then((response)=>{
       if(!response.ok){
         throw new Error("Failed to fetch data");
       }
       return response.json();
    })
    .then((data) =>{

     if(data == !data1.email && data == !data1.passcode){
       return  alert("Email or Passcode Incorrect");
     }else {
         console.log("Data",data)
         navigate("/hp");
         setData1(data)
         
         
     }
    })
    .catch((error) =>{
      console.error("Error during fetch", error);
    });

 }

  return (
    <div className='bg-info text-center'>
       <div className='box'>
        <form>
            <input type='text' placeholder="Email" name='email' value={data1.email} onChange={Data1}/><br></br>
            <input type='password' placeholder="Passcode" name='passcode' value={data1.passcode} onChange={Data1}/><br></br><br></br>
            <button className="btn btn-info"onClick={handleSubmit1}>Log in</button><br></br>
            <Link to ="/r" className='link'>Don't have an account?</Link>
        </form>
    </div>
    </div>
  )
}

export default Login;