import { useState } from "react";
import "./App.css";
import FileDropZone from "./FileDropZone";
import RenderCSV from "./RenderCSV";

function App() {
    const [file, setFile] = useState(null);
    const onDrop = (droppedFile) => {
        setFile(droppedFile[0]);
    };

    return (
        <section className="App">
            {file ? <RenderCSV file={file} /> : <FileDropZone onDrop={onDrop} />}
        </section>
    );
}

export default App;
