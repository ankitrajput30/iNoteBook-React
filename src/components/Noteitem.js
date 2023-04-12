import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext, useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

const Noteitem = (props) => {
     const context = useContext(noteContext);
     const { deleteNote } = context;

     const { note, updateNote } = props;

     const [currentTime, setCurrentTime] = useState(new Date());
     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentTime(new Date());
          }, 1000);
          return () => clearInterval(interval);
     }, []);


     const shareNote = () => {
          if (navigator.share) {
               navigator.share({
                    title: 'My Notes',
                    text: note,
               })
                    .then(() => console.log('Note shared successfully'))
                    .catch((error) => console.log('Error sharing note:', error));
          } else {
               console.log('Web Share API not supported');
          }
     }

     const downloadNote = () => {
          const blob = new Blob([note.toString()], { type: 'text/plain;charset=utf-8' });
          saveAs(blob, 'note.txt');
     }



     return (
          <div className='col-md-3'>
               <div className="card my-3" style={{ border: '5px solid darkblue', borderRadius: '15px' }}>
                    <div className="card-body">
                         <div className="tymm">
                              <h5 className="card-title">{note.title}</h5>
                              <p className="card-text">{currentTime.toLocaleString()}</p>
                         </div>
                         <p className="card-text">{note.description}</p>
                         <i className="far fa-trash-alt mx-3" onClick={() => { deleteNote(note._id); }}></i>
                         <i className="far fa-edit" onClick={() => { updateNote(note); }}></i>
                         <i className="fa-solid fa-download  mx-3" onClick={() => { downloadNote(note); }}></i>
                         <i className="fa-solid fa-share-from-square" onClick={() => { shareNote(note._id); }}></i>
                    </div>
               </div>
          </div>
     )
}

export default Noteitem  