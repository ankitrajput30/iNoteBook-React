import React,  { useState } from 'react'
import BlogContext from './blogContext'

const BlogState = (props) => {
     const host = "http://localhost:5000"
     const blogsInitial = []
     const [blogs, setBlogs] = useState(blogsInitial)

     //Fetch all Notes
     const getBlogs = async () => {
          //API CALL
          const response = await fetch(`${host}/api/notes/fetchallnotes`, {
               method: "GET", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
               },
          });
          const json = await response.json();
          setBlogs(json);
     }

     //Add a Note
     const addBlog = async (title, description, tag) => {
          //API CALL

          const response = await fetch(`${host}/api/notes/addnotes`, {
               method: "POST", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
               },
               body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
          });

          //logic to add a Blog
          const blog = await response.json();
          setBlogs(blogs.concat(blog))
     }

     
     // Delete a Note
     const deleteBlog = async (id) => {
          // API Call
          const response = await fetch(`${host}/api/notes/deletenode/${id}`, {
               method: 'DELETE',
               headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
               }
          });
          const json = await response.json();
          console.log(json);
          const newBlogs = blogs.filter((blog) => { return blog._id !== id })
          setNotes(newBlogs)
     }


     //Edit a Note
     const editBlog = async (id, title, description, tag) => {
          //API CALL

          const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
               method: "PUT", // *GET, POST, PUT, DELETE, etc.
               headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
               },
               body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json);

          let newBlogs = JSON.parse(JSON.stringify(blogs))
          //Logic to edit a note on client side.
          for (let index = 0; index < newBlogs.length; index++) {
               const element = newBlogs[index];
               if (element._id === id) {
                    newBlogs[index].title = title;
                    newBlogs[index].description = description;
                    newBlogs[index].tag = tag;
                    break;
               }
          }
          setBlogs(newBlogs);
     }

     return (
          <BlogContext.Provider value={{ blogs, addBlog, deleteBlog, editBlog, getBlogs }}>
               {props.children}
          </BlogContext.Provider>
     )
}

export default BlogState;