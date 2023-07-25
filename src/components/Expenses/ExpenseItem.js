
import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    
    const clickHandler = () => {
        console.log("Clicked");
    }

    return (
            <Card className='expense-item'> 
            <ExpenseDate date ={props.date}></ExpenseDate>
            <ExpenseDetails location={props.location} desc={props.desc} price={props.price}></ExpenseDetails> 
            <button onClick={clickHandler}>Delete Expense</button>
            </Card>  
    )
}

export default ExpenseItem;
