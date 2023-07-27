
import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';


const ExpensesList = props =>{

    let showExpense =  props.items.map((ele) => {
        return (<ExpenseItem key={ele.id} location={ele.location} price={ele.price}desc={ele.desc} date={ele.date}></ExpenseItem>)
    })


    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">No Expense Found</h2>
    } 
   

    return (<ul className="expenses-list">
        {showExpense} </ul>
    )
}

export default ExpensesList;