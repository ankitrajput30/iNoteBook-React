import React from 'react'
import { Notes } from './Notes'

export const NoteStore = (props) => {
     const { showAlert } = props;
  return (
    <div>
          <Notes showAlert={showAlert} />
    </div>
  )
}
