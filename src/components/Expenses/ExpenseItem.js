
import React,{useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const [desc,setDesc] = useState(props.desc);

    const [price, setPrice] = useState(props.price);
    
    const priceClickHandler = () =>{
        setPrice(100);
    }

    const clickHandler = () => {
        setDesc('UpdatedFood');
    }

    return (
            <Card className='expense-item'> 
            <ExpenseDate date ={props.date}></ExpenseDate>
            <ExpenseDetails location={props.location} desc={desc} price={price}></ExpenseDetails> 
            <button onClick={clickHandler}>Change Desc</button>
            <button onClick={priceClickHandler}>Change Price</button>
            </Card>  
    )
}

export default ExpenseItem;
