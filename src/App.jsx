import { useEffect, useState } from "react";
import Form from "./components/Form";
import Stats from "./components/Stats";
import Title from "./components/Title";
import List from "./components/List";

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("items"));
    return saved || [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <Title />
        <Stats items={items} />
        <Form setItems={setItems} />
      </div>
      <List items={items} setItems={setItems} />
    </div>
  );
}
