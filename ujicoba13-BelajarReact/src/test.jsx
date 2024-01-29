import { useEffect, useState } from "react";

export default function Myaoo() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Jam Sekarang</h1>
      <h2>{currentTime}</h2>
    </>
  );
}
