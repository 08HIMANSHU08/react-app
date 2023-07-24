
import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card'

function ExpenseItem(props) {
    // console.log(props)
    return (
            <Card className='expense-item'> 
            <ExpenseDate date ={props.date}></ExpenseDate>
            <ExpenseDetails location={props.location} desc={props.desc} price={props.price}></ExpenseDetails> 
            </Card>  
    )
}

export default ExpenseItem;
