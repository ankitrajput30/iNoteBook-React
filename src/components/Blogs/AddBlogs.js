import React from 'react'
import blogContext from '../../context/blogs/blogContext'
import { useContext } from 'react'
import { useState } from 'react'

export const AddBlogs = (props) => {

     const context = useContext(blogContext);
     const { addBlog } = context;

     const [blog, setBlog] = useState({ title: "", description: "", tag: "" })
     const handleClick = (e) => {
          e.preventDefault();
          addBlog(blog.title, blog.description, blog.tag);
          setBlog({ title: "", description: "", tag: "" });
          props.showAlert("Added successfully", "success")
     }

     const onChange = (e) => {
          setBlog({ ...blog, [e.target.name]: e.target.value })
     }

     return (
          <>
               <div className="container my-3">
                    <h1>Add a Blog</h1>
                    <form>
                         <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input type="text" className="form-control" id="title" name='title' value={blog.title} onChange={onChange} />
                         </div>
                         <div className="mb-3">
                              <label htmlFor="descrption" className="form-label">Description</label>
                              <input type="text" className="form-control" id="description" name='description' value={blog.description} onChange={onChange} />
                         </div>
                         <div className="mb-3">
                              <label htmlFor="tag" className="form-label">Tag</label>
                              <input type="text" className="form-control" id="tag" name='tag' value={blog.tag} onChange={onChange} />
                         </div>
                         <button disabled={blog.title.length < 3 || blog.description.length < 8 || blog.tag.length < 1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Blog</button>
                    </form>
               </div>
          </>
     )
}
