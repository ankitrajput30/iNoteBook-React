import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
     return (
          <div>
               <div className="entry">
                    <h1 className="wp-block-heading textconc">Contact Us</h1>
                    <p className="textp">
                      please post your question on our forums at here for further assistance.
                    </p>
                    <div className="container formss">
                         <form className='forum1'>
                              <h3 className='head'>Forum</h3>
                              <label for="name">Name</label>
                              <input type="text" id="name" name="name" placeholder="Your name" required />

                              <label for="email">Email</label>
                              <input type="email" id="email" name="email" placeholder="Your email" required />

                              <label for="subject">Subject</label>
                              <input type="text" id="subject" name="subject" placeholder="Subject" required />

                              <div className="all">
                                   <label for="message">Message</label>
                                   <textarea id="message" name="message" placeholder="Your message" required></textarea>
                                   <div className="btnsub">
                                        <button type="submit" className='btnsubmit'>Submit</button>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     )
}
