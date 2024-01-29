import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [nama, setNama] = useState("");
  useEffect(() => {
    console.log("Nama anda : ", nama);
    if (nama.length < 4) {
      console.error("Nama harus lebih dari 4");
    }
  }, [nama]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Onsubmit");

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    console.table(formJSON);
  };
  return (
    <div className="App">
      <h1>Form React</h1>
      <hr />

      <form className="form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="nama">Nama Siswa</label>
          <input
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        {nama.length > 0 && nama.length < 4 && (
          <div className="error" style={{ color: "red" }}>
            Nama Kurang dari 4 karakter
          </div>
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default App;
