import { useState } from 'react';
import './App.css';
import FileDropZone from "./FileDropZone";

function App() {
  const [file, setFile] = useState(null);
  const onDrop = (droppedFile) => {
    setFile(droppedFile[0]);
  }

  return (
    <section className="App">
      {file ? <p>Has File</p> : <FileDropZone onDrop={onDrop} />}
    </section>
  );
}

export default App;
