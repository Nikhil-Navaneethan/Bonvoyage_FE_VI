import React,{useState} from 'react';
import axios from 'axios';

export const Admin = () => {
    const [posts, SetPosts] = useState();
   let Users = () => {
        axios.get("http://localhost:8080/register/userdetails")
        .then((response)=> {
            Object.keys(response.data).forEach(key => {
                document.write(key, response.data[key]);
                SetPosts(response.data);
                return(
                    <table striped bordered hover>
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(posts) && posts.map((post) => (
                            <tr key={post.id}>
                                <td><b>{post.id}</b></td>
                                <td><b>{post.username}</b></td>
                                <td><b>{post.email}</b></td>
                                <td><b>{post.password}</b></td>
                                <td>
                                </td>
                            </tr>
                        ))}
    
                    </tbody>
                </table>
                )
            });
            
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <div>
    <h1 className='text-center'>Admin Page</h1>
    <br></br>
    <button onClick={Users}>Get User Details</button>
    </div>
  )
}
export default Admin;

