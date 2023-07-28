
import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'

const ExpenseItem = (props) => {


    return (
            <li>
                <Card className='expense-item'> 
                <ExpenseDate date ={props.date}></ExpenseDate>
                <ExpenseDetails location={props.location} desc={props.desc} price={props.price}></ExpenseDetails> 
                </Card> 
            </li> 
    )
}

export default ExpenseItem;
