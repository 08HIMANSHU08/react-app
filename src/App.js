
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {location:"lucknow",price:50,desc:"Food"},
    {location:"Kanpur",price:100,desc:"Movie"},
    {location:"Prayagraj",price:200,desc:"Game"},
    {location:"Barabanki",price:150,desc:"Fodd"},
    {location:"lucknow",price:50,desc:"Food"},
    {location:"Kanpur",price:100,desc:"Movie"},
    {location:"Prayagraj",price:200,desc:"Game"},
    {location:"Barabanki",price:150,desc:"Fodd"},
    {location:"lucknow",price:50,desc:"Food"},
    {location:"Kanpur",price:100,desc:"Movie"},
    {location:"Prayagraj",price:200,desc:"Game"},
    {location:"Barabanki",price:150,desc:"Fodd"}
  ]
  return (
    <div>
      <h2> Expense Item</h2>
      {expenses.map((ele) => {
        return <ExpenseItem location={ele.location} price={ele.price}desc={ele.desc}></ExpenseItem>
      })}
    </div>
  );
}

export default App;
