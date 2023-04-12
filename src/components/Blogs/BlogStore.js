import React from 'react'
import { Blogs } from './Blogs'

export const BlogStore = (props) => {
     const { showAlert } = props;
     return (
          <div>
               <Blogs showAlert={showAlert}/>
          </div>
     )
}
