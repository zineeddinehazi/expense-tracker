import { useState } from "react";
import Form from "./components/Form";
import Stats from "./components/Stats";
import Title from "./components/Title";
import List from "./components/List";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [currency, setCurrency] = useState("$");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !type || !+amount) return;
    const id = crypto.randomUUID();
    const newItem = {
      name: name,
      amount: type === "Income" ? amount : `-${amount}`,
      type: type,
      id: id,
    };
    setItems((items) => [...items, newItem]);
    setName("");
    setAmount("");
    setType("Expense");
  };

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col">
        <Title />
        <Stats items={items} currency={currency} />
        <Form
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          type={type}
          setType={setType}
          handleSubmit={handleSubmit}
          currency={currency}
          setCurrency={setCurrency}
        />
      </div>
      <List items={items} setItems={setItems} currency={currency} />
    </div>
  );
}
