import { useState } from "react";
import List from "./list";
function App() {
  const classA = [
    { id: 1, name: "Tono", nilai: "s" },
    { id: 2, name: "Budi", nilai: 25 },
    { id: 3, name: "Satria", nilai: 65 },
    { id: 4, name: "Eko", nilai: 77 },
    { id: 5, name: "Ilham", nilai: 90 },
  ];
  const classB = [
    { id: 6, name: "Rini", nilai: 90 },
    { id: 7, name: "Santi", nilai: 80 },
    { id: 8, name: "Adam", nilai: 55 },
    { id: 9, name: "Julian", nilai: 49 },
    { id: 10, name: "Siti", nilai: 80 },
  ];

  return (
    <>
      {classA.length > 0 && <List items={classA} class="Class A" />}
      {classB.length > 0 && <List items={classB} class="Class B" />}
    </>
  );
}

export default App;
