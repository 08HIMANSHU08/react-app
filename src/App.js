
import React from 'react';

import ExpenseItem from './components/Expenses/ExpenseItem';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense'
import Card from './components/UI/Card';

const App = ()=> {
  const expenses = [
    {location:"Lucknow",price:50,desc:"Food",date:new Date(2023,2,12)},
    {location:"Kanpur",price:300,desc:"Movie",date:new Date(2022,4,9)},
    {location:"Prayagraj",price:200,desc:"Game",date:new Date(2022,8,8)},
    {location:"Barabanki",price:150,desc:"Food",date:new Date(2022,10,3)}
  ]
  return (
    <Card className='expense'>
      <h2> Expense Item</h2>
      <NewExpense></NewExpense>
      {expenses.map((ele) => {
        return <ExpenseItem location={ele.location} price={ele.price}desc={ele.desc} date={ele.date}></ExpenseItem>
      })}
    </Card>
  );
}

export default App;
