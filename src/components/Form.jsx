export default function Form({
  name,
  setName,
  amount,
  setAmount,
  type,
  setType,
  handleSubmit,
  currency,
  setCurrency,
}) {
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-10 border-[#123458] p-7"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between gap-4">
          <label className="rounded-xl bg-[#E8F9FF] p-2 text-xl font-semibold shadow">
            Item
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b p-2"
            type="text"
          />
        </div>
        <div className="flex justify-between gap-4">
          <label className="rounded-xl bg-[#E8F9FF] p-2 text-xl font-semibold shadow">
            Amount
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-b p-2 focus:border-[#2A629A]"
            type="text"
          />
        </div>
        <div className="flex gap-4 pt-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl bg-[#E8F9FF] p-2 text-xl font-semibold shadow"
          >
            <option value={"Income"}>Income</option>
            <option value={"Expense"}>Expense</option>
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="rounded-xl bg-[#E8F9FF] p-2 text-xl font-semibold shadow"
          >
            <option value={"$"}>$</option>
            <option value={"€"}>€</option>
            <option value={"£"}>£</option>
            <option value={"¥"}>¥</option>
            <option value={"DA"}>DA</option>
            <option value={"¥"}>¥</option>
          </select>
        </div>
        <button
          type="submit"
          className="m-1 rounded-lg bg-[#1B56FD] p-2 text-xl text-[#EEF7FF] hover:bg-[#3D90D7]"
        >
          Add item
        </button>
      </form>
    </div>
  );
}
