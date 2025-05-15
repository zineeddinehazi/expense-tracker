import Item from "./Item";

export default function List({ items, setItems, currency }) {
  const handleRemove = (ID) => {
    setItems((items) => items.filter((item) => item.id !== ID));
  };
  const list = (
    <div
      className={`${items.length > 6 ? "grid grid-cols-2" : "flex flex-col"} gap-6`}
    >
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          handleRemove={handleRemove}
          currency={currency}
        />
      ))}
    </div>
  );
  return (
    <div className="my-8 flex flex-col items-center gap-7">
      <h1 className="py-3 text-3xl font-bold">Transactions</h1>
      {items.length === 0 ? <h1>Transaction list is empty!</h1> : list}
    </div>
  );
}
