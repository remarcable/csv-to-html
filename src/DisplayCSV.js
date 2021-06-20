import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Row from "./Row";

function DisplayCSV({ file }) {
    const [headers, setHeaders] = useState(null);
    const [rows, setRows] = useState(null);
    useEffect(() => {
        Papa.parse(file, {
            complete: ({ data }) => {
                const [dataHeaders, ...dataRows] = data;
                setHeaders(dataHeaders);
                setRows(dataRows);
            },
        });
    }, [file]);

    return (
        <main>
            {rows && headers && rows.map((row, i) => <Row key={i} row={row} headers={headers} />)}
        </main>
    );
}

export default DisplayCSV;
