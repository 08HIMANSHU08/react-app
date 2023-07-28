
import React,{useState} from 'react';

import ExpensesList from './components/Expenses/ExpenseList';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter'
import Card from './components/UI/Card';
import ExpenseChart from './components/Expenses/ExpensesChart';

import './components/NewExpense/NewExpense.css'

let DummyExpenses = [
  {id:1,location:"Lucknow",price:50,desc:"Food",date:new Date(2020,2,12)},
  {id:2,location:"Kanpur",price:300,desc:"Movie",date:new Date(2022,4,9)},
  {id:3,location:"Prayagraj",price:200,desc:"Game",date:new Date(2021,8,8)},
  {id:4,location:"Barabanki",price:150,desc:"Food",date:new Date(2023,10,3)}
]

const App = ()=> {

  const [expenses,setExpenses] = useState(DummyExpenses);

  const [filteredYear, setFilteredYear] = useState('ALL')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  
  const addExpenseHandler = (expense) =>{
      setExpenses([expense,...expenses])
  }

  const filteredExpenses = expenses.filter(expense=>{
    if(filteredYear==="ALL"){
      return expense;
    }
    return expense.date.getFullYear().toString()===filteredYear;
  })

  return (
    <Card className='expense'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default App;
