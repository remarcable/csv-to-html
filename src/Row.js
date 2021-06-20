// import "./Row.css"

function Row({ row, headers }) {
    return (
        <section>
            <h2>{row[1]}</h2>
            {row.map((data, i) => (
                <div key={i}>
                    <h3>{headers[i]}</h3>
                    <p>{data}</p>
                </div>
            ))}
            <hr />
        </section>
    );
}

export default Row;
