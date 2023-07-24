
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {location:"lucknow",price:50,desc:"Food",date:new Date(2021 ,5, 12)},
    {location:"Kanpur",price:100,desc:"Movie",date:new Date(2021 ,5, 12)},
    {location:"Prayagraj",price:200,desc:"Game",date:new Date(2021 ,5, 12)},
    {location:"Barabanki",price:150,desc:"Fodd",date:new Date(2021 ,5, 12)},
  ]
  return (
    <div>
      <h2> Expense Item</h2>
      {expenses.map((ele) => {
        return <ExpenseItem location={ele.location} price={ele.price}desc={ele.desc} date={ele.date}></ExpenseItem>
      })}
    </div>
  );
}

export default App;
