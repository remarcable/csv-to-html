import React from 'react'
import {useDropzone} from 'react-dropzone'
import "./FileDropZone.css"

function FileDropZone({ onDrop }) {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="drop-zone">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default FileDropZone;
