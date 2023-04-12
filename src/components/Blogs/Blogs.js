import React from 'react'
import { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogContext from '../../context/blogs/blogContext'
import { AddBlogs } from './AddBlogs';
import Blogitem from './Blogitem';

export const Blogs = (props) => {
     const context = useContext(blogContext);
     let navigate = useNavigate();

     const { blogs, getBlogs, editBlog } = context;
     useEffect(() => {
          if (localStorage.getItem('token')) {
               getBlogs()
               // eslint-disable-next-line
          }
          else {
               navigate("/login");
          }
     }, [])

     const ref = useRef(null)
     const refClose = useRef(null)
     const [blog, setBlog] = useState({ id: "", etitle: "", edescription: "", etag: "" })


     const updateBlog = (currentNode) => {
          ref.current.click();
          setBlog({ id: currentNode._id, etitle: currentNode.title, edescription: currentNode.description, etag: currentNode.tag });
          // props.showAlert("Updated successfully", "success")
     }

     const handleClick = (e) => {
          editBlog(blog.id, blog.etitle, blog.edescription, blog.etag);
          refClose.current.click();
          props.showAlert("Updated successfully", "success")
     }

     const onChange = (e) => {
          setBlog({ ...blog, [e.target.name]: e.target.value })
     }


     return (
          <>
               <AddBlogs showAlert={props.showAlert} />
               <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
               </button>

               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                         <div className="modal-content">
                              {/* <div className="modal-header">
                                   <h5 className="modal-etitle" id="exampleModalLabel">Modal etitle</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div> */}
                              <div className="modal-body">
                                   {/* update blogs form */}
                                   <div className="container my-3">
                                        <h1 className='headupdate'>Update your Blog</h1>
                                        <form>
                                             <div className="mb-3">
                                                  <label htmlFor="etitle" className="form-label">title</label>
                                                  <input type="text" className="form-control" id="etitle" name='etitle' value={blog.etitle} onChange={onChange} />
                                             </div>
                                             <div className="mb-3">
                                                  <label htmlFor="edescrption" className="form-label">description</label>
                                                  <input type="text" className="form-control" id="edescription" name='edescription' value={blog.edescription} onChange={onChange} />
                                             </div>
                                             <div className="mb-3">
                                                  <label htmlFor="etag" className="form-label">tag</label>
                                                  <input type="text" className="form-control" id="etag" name='etag' value={blog.etag} onChange={onChange} />
                                             </div>
                                             {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Blog</button> */}
                                        </form>
                                   </div>
                              </div>
                              <div className="modal-footer">
                                   <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" disabled={blog.etitle.length < 3 || blog.edescription.length < 8 || blog.etag.length < 1} className="btn btn-primary" onClick={handleClick}>Update Blog</button>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="row my-3">
                    <h3>Your blogs</h3>
                    <div className="container mx-2">
                         {blogs.length === 0 && "No blogs to display"}
                    </div>
                    {blogs.map((blog) => {
                         return <Blogitem key={blog._id} updateBlog={updateBlog} showAlert={props.showAlert} showGreet={props.showGreet} blog={blog} />
                    })}
               </div>
          </>
     )
}
