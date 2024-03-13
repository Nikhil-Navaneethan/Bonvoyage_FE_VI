import React,{useState} from 'react';
import '../src/Places.css';
import axios from 'axios';


export const Places = () => {
    let [selectedImage,setSelectedImage] = useState();

    let uploadImage = null;

    let [data,setData] = useState({
        image:"",
        name:"",
        description:"",
        category:"",

    })

    let Data = (event) => {
        let{name,value}=event.target;
        setData({data,[name]:value})
        console.log(name,value);
    }

    
    let uploads = () => {
       let files = {
        names:data.name,
        image:uploadImage,
        description:data.description,
        category:data.category

       } 
    axios.post("http://localhost:8080/places/upload1",(files))
    .then((response) => {
        console.log(response.data)
    })
  .catch((err) => {
      console.log(err)
  })

        

    }

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
        uploadImage = text;
        console.log("===Upload Image=====" + uploadImage)
      })
  }
        

  return (
<div>
<button type="button" className="btn btn-info border border-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
        <input type='text' placeholder='Enter Name' name="name" value={Data.names} onChange={Data}/><br></br><br></br>
        <textarea name='description' placeholder='Enter Description' value={Data.description} onChange={Data}></textarea><br></br><br></br>
        <input type='text' name='category' placeholder='Enter Category' value={Data.category} onChange={Data}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={uploads}>Save changes</button>
      </div>
    </div>
  </div>
</div>
 </div>

  )
  
}
  
export default Places;
