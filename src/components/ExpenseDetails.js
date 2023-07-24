
import React from 'react';

import './ExpenseItem.css';


function ExpenseDetails(props) {
    return (
        <div className='expense-item__description'>
            <h2>{props.location}</h2>
            <h2>{props.desc}</h2>
            <div className='expense-item__price'>Rs {props.price}</div>
        </div>
        )
}

export default ExpenseDetails
