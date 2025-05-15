export default function Stats() {
  return (
    <div className="flex flex-col items-center gap-6 text-3xl">
      <h1>Balance: 5000.00$</h1>
      <div className="flex gap-8">
        <h1 className="text-center">
          Income <h1 className="text-green-600">9000.00$</h1>
        </h1>
        <h1 className="text-center">
          Expense <h1 className="text-red-700">4000.00$</h1>
        </h1>
      </div>
    </div>
  );
}
