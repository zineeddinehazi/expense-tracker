import Item from "./Item";

export default function List({ items, setItems, setShowList }) {
  const handleRemove = (ID) => {
    setItems((items) => items.filter((item) => item.id !== ID));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 mb-5 text-center text-4xl">Transactions</h1>
      {items.length === 0 ? (
        <h1 className="mt-3">Transaction list is empty!</h1>
      ) : (
        <div className={"m-5 grid grid-cols-2 gap-6"}>
          {items.map((item) => (
            <Item item={item} key={item.id} handleRemove={handleRemove} />
          ))}
        </div>
      )}
      <button
        className="mt-4 mb-6 rounded-lg border-2 p-3 text-center text-xl font-bold hover:bg-gray-300"
        onClick={() => setShowList((showList) => !showList)}
      >
        Return to home page
      </button>
    </div>
  );
}
