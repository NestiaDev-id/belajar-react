import { useState } from "react";
import Header from "./Header";
import IsiForm from "./form";
import GroceryList from "./GrooceryList";
import Navbar from "./footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(i) {
    setItems([...items, i])
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked} :  item)));
  }
  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
    <Header/>
    <IsiForm onAddItem={handleAddItem}/>
    <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
    <Navbar items={items}/>
  </div>
  )
}
