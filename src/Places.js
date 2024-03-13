import React,{useState,useEffect} from 'react';
import '../src/Places.css';
import axios from 'axios';


export const Places = () => {
    let [selectedImage,setSelectedImage] = useState();
  let[uploadImage,setUploadImage]=useState();

  let[addPlaces,setAddPlaces]=useState();
    // let uploadImage = null;

    let handlefile = () => {
      console.log("Uploaded")
      const formData = new FormData();
      formData.append("file",selectedImage)
      
  
      fetch("http://localhost:8080/places/upload", {
        method: 'POST',
        body: formData,
        dataType: "jsonp"
      })
        .then(response => response.text())
        .then(text => {
          console.log(text)
          // uploadImage = text;
          setUploadImage(text);
          console.log("===Upload Image=====" + uploadImage)
        })
    }
          
  

    let [data1,setData] = useState({
        name:"",
        description:"",
        category:"",

    })

    let Data = (event) => {
        let{name,value}=event.target;
        setData({...data1,[name]:value})
        console.log(name,value);
    }

    
    let uploads = (event) => {
      console.log(uploadImage)
       let files = {
        name:data1.name,
        description:data1.description,
        category:data1.category,
        image:uploadImage

       } 
       console.log(JSON.stringify(files))
    axios.post("http://localhost:8080/places/upload1",(files))
    .then((response) => {
        console.log(response.data)
    })
  .catch((err) => {
      console.log(err)
  })
    }

  let getAllPlaces = () =>{
    axios.get("http://localhost:8080/places/allplaces")
    .then((response)=> {
      console.log(response.data)
      setAddPlaces(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  
    }

    
    useEffect(() => {
      getAllPlaces()
 }, []);
     
    
  return (
<div>
<button type="button" className="btn btn-info border border-dark container m-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add New Place
</button>

 <div className="modal" tabIndex="-1" id="staticBackdrop">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add Place Details here</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {selectedImage && (
        <div>
            <img alt='not found' width={"250px"} src={URL.createObjectURL(selectedImage)}/>
        <button onClick={handlefile}>Upload</button>
        </div>
        )}
        <input type='file' name="image" onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }} /><br></br><br></br>
        <input type='text' placeholder='Enter Name' name="name" value={data1.name} onChange={Data}/><br></br><br></br>
        <textarea name='description' placeholder='Enter Description' value={data1.description} onChange={Data}></textarea><br></br><br></br>
        {/* <input type='text' name='category' placeholder='Enter Category' value={data1.category} onChange={Data}/> */}
        <select name='category' value={data1.category} onChange={Data} className="form-select w-50 text-center container" aria-label="Default select example">
            <option>Choose Category</option>
            <option value="Andhra">Andhra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamilnadu">Tamilnadu</option>
       </select>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={uploads}>Save changes</button>
      </div>
    </div>
  </div>
</div>

{/* <button onClick={getAllPlaces}>click</button> */}
{Array.isArray(addPlaces) && addPlaces.map((place) => (
        <div key={place.id}>
          <div className='row'>
<div className="card col-6" style={{width: "18rem"}}>
  <div className="card-body">
    <img src={`http://localhost:8080/uploads/${place.image}`} className="card-img-top" alt="..."/>
    <h5 className="card-title">{place.name}</h5>
    <p className="card-text">{place.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    

</div>
 </div>
 </div>
 ))}
 </div>

  )
  
}
  
export default Places;
