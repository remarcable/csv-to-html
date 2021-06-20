import React from "react";
import { useDropzone } from "react-dropzone";

import "./FileDropZone.css";

function FileDropZone({ onDrop }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: ".csv",
        maxFiles: 1,
    });

    return (
        <div {...getRootProps()} className="drop-zone">
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the file here ...</p>
            ) : (
                <p>Drag 'n' drop a CSV here, or click to select one</p>
            )}
        </div>
    );
}

export default FileDropZone;
