export default function Stats({ items }) {
  let accT = 0;
  items.forEach((element) => {
    accT = accT + +element.amount;
  });
  let accIn = 0;
  let accEx = 0;
  items.forEach((element) => {
    +element.amount <= 0
      ? (accEx = accEx + +element.amount)
      : (accIn = accIn + +element.amount);
  });
  return (
    <div className="mb-10 flex flex-col items-center text-3xl">
      <h1 className="font-bold">Your balance</h1>
      <h1 className="font-bold">{accT}$</h1>
      <div className="mt-10 flex gap-12 bg-[#E8F9FF] p-6 shadow-lg">
        <h1 className="text-center">
          Income <h1 className="text-green-600">{accIn}$</h1>
        </h1>
        <h1 className="text-center">
          Expense <h1 className="text-red-700">{-accEx}$</h1>
        </h1>
      </div>
    </div>
  );
}
