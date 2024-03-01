import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export let Login = () => {

  return (
    <div>
        <form>
            <label>E-mail</label>
            <input type='text'/><br></br>
            <label>Passcode</label>
            <input type='password'/><br></br>
            <button>Log in</button><br></br>
            <Link to ="/r">Don't have an account?</Link>
        </form>
    </div>
  )
}

export default Login;