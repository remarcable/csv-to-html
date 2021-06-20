import { useState } from "react";
import "./App.css";
import FileDropZone from "./FileDropZone";
import DisplayCSV from "./DisplayCSV";

function App() {
    const [file, setFile] = useState(null);
    const onDrop = (droppedFile) => {
        setFile(droppedFile[0]);
    };

    return (
        <section className="App">
            {file ? <DisplayCSV file={file} /> : <FileDropZone onDrop={onDrop} />}
        </section>
    );
}

export default App;
