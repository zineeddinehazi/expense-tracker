export default function Item({ item, handleRemove, currency }) {
  return (
    <div className="flex justify-between rounded-xl bg-[#E8F9FF] p-4 shadow-lg">
      <div className="flex flex-col text-2xl">
        <h1 className="font-bold">{item.name}</h1>
        <h1
          className={`font-bold ${item.type === "Income" ? "text-green-600" : "text-red-700"}`}
        >
          {item.amount}
          {currency}
        </h1>
      </div>
      <button
        onClick={() => handleRemove(item.id)}
        className="ml-96 rounded-xl bg-[#E55050] px-3 font-bold text-[#EEF7FF] shadow-lg hover:bg-[#CB0404]"
      >
        Remove
      </button>
    </div>
  );
}
