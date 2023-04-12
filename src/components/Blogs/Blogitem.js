import React from 'react'
import { useContext } from 'react';
import blogContext from '../../context/blogs/blogContext';

const Blogitem = (props) => {

     const context = useContext(blogContext);
     const { deleteBlog } = context;

     const { blog, updateBlog } = props;
     return (
          <div className='col-md-3'>
               <div className="card my-3">
                    <div className="card-body">
                         <h5 className="card-title">{blog.title}</h5>
                         <p className="card-text">{blog.description}</p>
                         <i className="far fa-trash-alt mx-3" onClick={() => { deleteBlog(blog._id); }}></i>
                         <i className="far fa-edit" onClick={() => { updateBlog(blog); }}></i>
                    </div>
               </div>
          </div>
     )
}

export default Blogitem