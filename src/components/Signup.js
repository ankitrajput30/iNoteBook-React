import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = (props) => {


     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
     let navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          const { name, email, password } = credentials;
          const response = await fetch("http://localhost:5000/api/auth/createuser", {
               method: "POST", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ name, email, password })
          });
          const json = await response.json();
          console.log(json);
          if (json.success) {
               //Save the token and redirect
               localStorage.setItem('token', json.authtoken);
               navigate('/notes');
               props.showAlert("Successfully created a Account", "success")
          }
          else {
               props.showAlert("Invalid Details", "danger")
          }
     }

     const onChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })
     }


     return (
          <div>
               <div className="form-container">
                    <form className="signup-form" onSubmit={handleSubmit} style={{ backgroundColor: 'LightGray' }}>
                         <h2>Signup</h2>
                         <div className="form-group">
                              <label htmlFor="new-username">Name</label>
                              <input type="text" id="username" name="name" onChange={onChange} required />
                         </div>
                         <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" name="email" onChange={onChange} required />
                         </div>
                         <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" id="password" name="password" onChange={onChange} minLength={8} required />
                         </div>
                         <div className="form-group">
                              <label htmlFor="cpassword">Confirm Password</label>
                              <input type="password" id="cpassword" name="cpassword" onChange={onChange} minLength={8} required />
                         </div>
                         <div className="btn-group">
                              <button type="submit" className='mx-3'>SignUp</button>
                              <p className='mx-3 my-2 para'>Already have an Account?<Link className="text-decoration-none" to="/login" role="button">Login </Link></p>
                         </div>
                    </form>
               </div>
          </div>
     )
}
