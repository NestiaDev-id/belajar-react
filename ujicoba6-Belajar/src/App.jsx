import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";

function App({ library }) {
  const data = {
    nama: "Tono",
    alamat: "Jogja",
    sekolah: {
      nama: "SMA 1 Jakarta",
      alamat: "Jakarta",
    },
  };

  const {
    nama,
    alamat,
    sekolah: { nama: namaSekolah, alamat: alamatSekolah },
  } = data;

  const array = ["Bandung", "Jogja", "Sulawesi", "Aceh"];

  const [lokasiSatu, lokasiDua, ...sisa] = array;
  console.log(lokasiSatu);
  console.log(lokasiDua);
  console.log(sisa);

  const [isiLokasi, setLokasi] = useState("Denpasar");

  console.log(isiLokasi);

  useEffect(() => {
    console.log(isiLokasi);
  }, [isiLokasi]);
  return (
    <>
      <h1>Belajar {library}</h1>
      <p>Saya ingin pergi ke- {isiLokasi}</p>
      <button onClick={() => setLokasi("Jogja")}>Jogja</button>
      <button onClick={() => setLokasi("Medan")}>Medan</button>
      <hr />
      <button
        onClick={() => {
          alert("click");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default App;
