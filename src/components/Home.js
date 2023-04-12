import React from 'react'
import Greet from './Greet'
// import { useState} from 'react'
// import { Notes } from './Notes'
import { Link } from 'react-router-dom'
// import notes_task from './notes_task.png'

export const Home = (props) => {
     // const [isVisible, setIsVisible] = useState(true);

     // Function to toggle the visibility of the div
     // function toggleVisibility() {
     //      setIsVisible(!isVisible);
     // }

     // useEffect(() => {
     //      const interval = setInterval(() => {
     //           toggleVisibility();
     //      }, 60000); // Toggle visibility every 60 seconds

     //      return () => clearInterval(interval);
     // }, []);
     return (
          <>
               <div className="greet">
                    <Greet />
               </div>
               <div className="home-container">
                    <div className="home-content">
                         <div className="containerhome">
                              <h1 className="headsim" id="headsim">The simplest way to keep notes</h1>
                              <p className="psubhead">All your notes, synced on all your devices. iNotebook - Notes on Cloud</p>
                              <div className="butn">
                                   <div className="btn btn-outline-info buttonsign">
                                        <Link className="signlink" to="/notes">Notes</Link>
                                   </div>
                                   <div className="btn btn-outline-info buttonsign">
                                        <Link className="signlink" to="/blogs">Blogs</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div style={{ height: '56px' }} aria-hidden="true" className="wp-block-spacer"></div>
                    <div className="hero1">
                         <div className="herosub">
                              <div className="herosubsub">
                                   <div className="hero__content" style={{ "max-width": '400px' }}>
                                        <div className="layout_flex"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div style={{ height: '56px' }} aria-hidden="true" className="wp-block-spacer"></div>
                    <div className="containercard">
                         <div className="boxcard1">
                              <div className="headcont">
                                   <h3 className="heading">Hit every deadline</h3>
                                   <p className="content">Create and assign tasks inside your notes with due dates, flags, and reminders so nothing falls through the cracks.</p>
                              </div>
                         </div>
                         <div className="boxcard2">
                              <div className="headcont">
                                   <h3 className="heading">Go paperless</h3>
                                   <p className="content">Scan important documents and keep them handy on all your devices. Save the information—not the clutter.</p>
                              </div>
                         </div>
                         <div className="boxcard3">
                              <div className="headcont">
                                   <h3 className="heading">Clip the web</h3>
                                   <p className="content">Save web pages (without the ads) and mark them up with arrows, highlights, and text to make them more useful.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

