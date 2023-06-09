import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'

export const AddNotes = (props) => {
     const context = useContext(noteContext);
     const { addNote } = context;

     const [note, setNote] = useState({title: "", description: "", tag: ""})
     const handleClick = (e) => {
          e.preventDefault();
          addNote(note.title, note.description, note.tag);
          setNote({title: "", description: "", tag: ""});
          props.showAlert("Added successfully", "success")
     }

     const onChange = (e) => {
          setNote({...note, [e.target.name]: e.target.value})
     }

     return (
          <>
               <div className="container my-3">
                    <h1>Add a Note</h1>
                    <form>
                         <div className="mb-3">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} />
                         </div>
                         <div className="mb-3">
                              <label htmlFor="descrption" className="form-label">Description</label>
                              <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
                         </div>
                         <div className="mb-3"> 
                              <label htmlFor="tag" className="form-label">Tag</label>
                              <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                         </div>
                         <button disabled={note.title.length<3 || note.description.length<8 || note.tag.length<1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                    </form>
               </div>
          </>
     )
}
