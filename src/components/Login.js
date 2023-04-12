import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {

     const [credentials, setCredentials] = useState({ email: "", password: "" })
     let navigate = useNavigate();
     // const [password, setPassword] = useState("")

     const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch("http://localhost:5000/api/auth/login", {
               method: "POST", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ email: credentials.email, password: credentials.password })
          });
          const json = await response.json();
          console.log(json);
          if (json.success) {
               //Save the token and redirect
               localStorage.setItem('token', json.authtoken);
               props.showAlert("LoggedIn Successfully", "success");
               navigate('/notes');
          }
          else {
               props.showAlert("Invalid Credentials", "danger")
          }
     }

     const onChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })
     }

     return (
          <div>
               <div className="form-container">
                    <form className="login-form" onSubmit={handleSubmit} style={{ backgroundColor: 'LightGray' }}>
                         <h2>Login</h2>
                         <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} required />
                         </div>
                         <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} required />
                         </div>
                         <div className="btn-group">
                              <button type="submit" className='mx-3'>Login</button>
                              <p className='mx-3 my-2 para'>Not an Account?<Link className="text-decoration-none" to="/signup" role="button">Sign Up</Link></p>
                         </div>
                    </form>
               </div>
          </div>
     )
}
