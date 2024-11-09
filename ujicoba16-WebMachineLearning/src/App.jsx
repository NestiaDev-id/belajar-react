import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <header className="flex items-center justify-between gap-4">
          <h1>
            Gabutzz <span className="text-blue-400">Doang</span>
          </h1>
          <button className="flex items-center gap-2">
            <p>Newssss</p>
            <i className="fa-solid fa-plus"></i>
          </button>
        </header>
        <main className="flex-1"></main>
      </section>
      <h1 className="text-green-400">Hello</h1>
      <footer></footer>
    </div>
  );
}

export default App;
