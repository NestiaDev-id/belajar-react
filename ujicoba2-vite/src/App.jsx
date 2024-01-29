/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';


function App() {
  const students = ['Tono', 'Budi', 'Alex'];
  const [likes, setLikes] = useState(0);

  function handlClick() {
      setLikes(likes + 1);
  }
  return(
      <>
      <Header name="test"></Header>
      <ul>
          {
              students.map((list) => (
                  <li key={list}>{list}</li>
              ))
          }
      </ul>
      <button onClick={handlClick}>Like ({likes})</button>

      
      </>
  );
}

export default App
