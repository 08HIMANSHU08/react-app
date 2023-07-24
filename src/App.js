
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {location:"Lucknow",price:50,desc:"Food",date:new Date(2023,2,12)},
    {location:"Kanpur",price:100,desc:"Movie",date:new Date(2022,4,9)},
    {location:"Prayagraj",price:200,desc:"Game",date:new Date(2022,8,8)},
    {location:"Barabanki",price:150,desc:"Food",date:new Date(2022,10,3)}
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
