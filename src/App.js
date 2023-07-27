
import React,{useState} from 'react';

import ExpenseItem from './components/Expenses/ExpenseItem';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter'
import Card from './components/UI/Card';

let DummyExpenses = [
  {id:1,location:"Lucknow",price:50,desc:"Food",date:new Date(2020,2,12)},
  {id:2,location:"Kanpur",price:300,desc:"Movie",date:new Date(2022,4,9)},
  {id:3,location:"Prayagraj",price:200,desc:"Game",date:new Date(2021,8,8)},
  {id:4,location:"Barabanki",price:150,desc:"Food",date:new Date(2019,10,3)}
]

const App = ()=> {

  const [expenses,setExpenses] = useState(DummyExpenses);

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  
  const addExpenseHandler = (expense) =>{
      setExpenses([expense,...expenses])
  }

  return (
    <Card className='expense'>
      <h2> Expense Item</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {expenses.map((ele) => {
        return <ExpenseItem key={ele.id} location={ele.location} price={ele.price}desc={ele.desc} date={ele.date}></ExpenseItem>
      })}
    </Card>
  );
}

export default App;
