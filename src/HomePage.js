import React,{useState}from 'react'
import './HomePage.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const HomePage = () => {
  const { username } = useParams();
  const {navigate} = useNavigate();

  let [data,setData] = useState({
    name:username,
    destination: "",
    arrival: "",
    departure:""
}) 

let Data = (event) => {
let {name,value} = event.target
setData({...data,[name]:value})
console.log(name,value);
}


let handleSubmit = () => {
    let state = {
        name: username,
        destination: data.destination,
        arrival: data.arrival,
        departure: data.departure

    }
        // fetch("http://localhost:8080/state/add", {
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     method: "post",
        //     body: JSON.stringify(state)
        // })  
        //     .then(Response => {
        //         console.log("Data Received" + state);
        //     })
      axios.post("http://localhost:8080/state/add",(state))
      .then((response)=> {
        console.log(response.data)
        if()
      })
      .catch((err)=>{
        console.log(err)

      })
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-dark" href="#">Bonvoy✈️</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Testimonials</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-dark" type="submit">Welcome {username} </button>
      </form>
    </div>
  </div>
</nav>

<div className='traveldeets container'>
<div className='text-center bg-light'> 
<select name='destination' value={data.destination} onChange={Data} className="form-select w-50 text-center container" aria-label="Default select example">
  <option>Choose Your Destination</option>
  <option value="Andhra">Andhra</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Tamilnadu">Tamilnadu</option>
</select>
<br></br>

<div className='row container-fluid'>
<label className='text-center col-3' >Date of Arrival</label>
<input name='arrival' value={data.arrival} onChange={Data} type='date' className='w-25 col-3 text-center'/>
<label className='text-center col-3' >Date of Departure</label>
<input name='departure' value={data.departure} onChange={Data} type='date' className='w-25 col-3  text-center' />
</div>
<br></br><br></br>
<button  onClick={handleSubmit} className='btn btn-info text-center'>Send Query➡️</button>
</div>
</div>
      </div>
  )
}
export default HomePage;
