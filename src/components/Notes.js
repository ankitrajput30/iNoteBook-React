import React from 'react'
import noteContext from '../context/notes/noteContext'
import { AddNotes } from './AddNotes';
import Noteitem from './Noteitem';
import { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Notes = (props) => {
     const context = useContext(noteContext);
     let navigate = useNavigate();

     const { notes, getNotes, editNote } = context;
     useEffect(() => {
          if(localStorage.getItem('token')){
               getNotes()
               // eslint-disable-next-line
          }
          else{
               navigate("/login");
          }
     }, [])

     const ref = useRef(null)
     const refClose = useRef(null)
     const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })


     const updateNote = (currentNode) => {
          ref.current.click();
          setNote({ id: currentNode._id, etitle: currentNode.title, edescription: currentNode.description, etag: currentNode.tag });
          // props.showAlert("Updated successfully", "success")
     }

     const handleClick = (e) => {
          editNote(note.id, note.etitle, note.edescription, note.etag);
          refClose.current.click();
          props.showAlert("Updated successfully", "success")
     }

     const onChange = (e) => {
          setNote({ ...note, [e.target.name]: e.target.value })
     }

     return (
          <>
               <AddNotes showAlert={props.showAlert}/>
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
                                   {/* update notes form */}
                                   <div className="container my-3">
                                        <h1 className='headupdate'>Update your Note</h1>
                                        <form>
                                             <div className="mb-3">
                                                  <label htmlFor="etitle" className="form-label">title</label>
                                                  <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} />
                                             </div>
                                             <div className="mb-3">
                                                  <label htmlFor="edescrption" className="form-label">description</label>
                                                  <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                                             </div>
                                             <div className="mb-3">
                                                  <label htmlFor="etag" className="form-label">tag</label>
                                                  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}/>
                                             </div>
                                             {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button> */}
                                        </form>
                                   </div>
                              </div>
                              <div className="modal-footer">
                                   <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                   <button type="button" disabled={note.etitle.length<3 || note.edescription.length<8 || note.etag.length<1} className="btn btn-primary" onClick={handleClick}>Update Note</button>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="row my-3">
                    <h3>Your Notes</h3>
                    <div className="container mx-2">
                         {notes.length === 0 && "No notes to display"}
                    </div>
                    {notes.map((note) => {
                         return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} showGreet={props.showGreet} note={note} />
                    })}
               </div>
          </>
     )
}
