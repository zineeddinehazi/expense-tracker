import { useEffect, useState } from "react";
import Form from "./components/Form";
import Stats from "./components/Stats";
import List from "./components/List";
import Title from "./components/Title";

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("items"));
    return saved || [];
  });
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return !showList ? (
    <div className="flex flex-col items-center">
      <Title />
      <Stats items={items} />
      <Form setItems={setItems} />
      <button
        className="absolute bottom-7 mt-8 rounded-lg border-2 p-3 text-center text-xl font-bold hover:bg-gray-300"
        onClick={() => setShowList((showList) => !showList)}
      >
        Show transaction list
      </button>
    </div>
  ) : (
    <List items={items} setItems={setItems} setShowList={setShowList} />
  );
}
