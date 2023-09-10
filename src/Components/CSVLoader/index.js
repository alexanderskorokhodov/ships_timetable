import React, { useState, useEffect } from "react";

function App({onAdded}) {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("none")
  const [error, setError] = useState("");


  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csv = e.target.result;
        const date = new Date()
        const rows = csv.split(/\r?\n/);
        let data_ = rows.map((row) => row.split(","));
        // data_ = data_.slice(1)
        // console.log(data_)
        setData(data_);
        // let cached = localStorage.getItem("cached_data")
        // if (cached === null) {
        //   cached = []
        // } else {
        //   cached = JSON.parse(cached)
        // }
        // cached.push({data: data_, time: date, filename: file.name})
        onAdded({data: data_, time: date, filename: file.name})
        // localStorage.setItem("cached_data", JSON.stringify(cached));
        // console.log(JSON.parse(localStorage.getItem("cached_data")))
      };
      reader.onerror = (err) => {
        setError("Ошибка чтения файла.");
      };

      if (reader) {
        reader.readAsText(file);
      }
    }
  }, [file]);

  function handleChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name)
  }
  return (
    <div>
      <h3>Загрузка и обработка CSV файла</h3>
      {error && <div className="error">{error}</div>}
      <form>
        <input type="file" onChange={handleChange} />
      </form>
      {/* {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {data[0].map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </div>
  );
}

export default App;
