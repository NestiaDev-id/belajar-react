import { useState } from "react";

export default function ToDoList() {
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage("Nama Aktifitas jangan kosong");
    }

    if (edit.todo) {
      const updatedTodos = todos.map((todo, index) =>
        index === edit.index ? activity : todo
      );

      setTodos(updatedTodos);
      setActivity("");
      setEdit({});
      return cancelEditHandler;
    }
    setMessage("");
    setTodos([...todos, activity]);
    setDone([...done, false]);
    setActivity("");
  }
  function removeTodoHandler(index) {
    const fiterTodos = todos.filter((_, i) => i !== index);
    setTodos(fiterTodos);
    if (edit.todo) cancelEditHandler();
  }
  function editTodoHandler(todo, index) {
    console.log(todo);
    setActivity(todo);
    setEdit({ todo, index });
    console.log(edit);
  }
  function cancelEditHandler() {
    setActivity("");
    setEdit({});
  }
  function doneTodoHandler(todo) {
    console.log(todo);
  }
  return (
    <>
      <h1>Simple Todo List</h1>
      <p style={{ color: "red" }}>{message}</p>
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          value={activity}
          placeholder="Nama Aktifitas"
          onChange={(e) => setActivity(e.target.value)}
        />
        <button type="submit">
          {edit.todo ? "Simpan Perubahan" : "Tambah"}
        </button>
        {edit.todo && (
          <button onClick={cancelEditHandler}>{"Batal Edit"}</button>
        )}
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" onChange={doneTodoHandler(todo, index)} />
            {todo}
            <button onClick={() => removeTodoHandler(index)}>Hapus</button>
            <button onClick={() => editTodoHandler(todo, index)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}
