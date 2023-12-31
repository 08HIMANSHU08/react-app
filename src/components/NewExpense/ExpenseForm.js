
import React,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredDesc, setEnteredDesc] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    // const [userInput,setUserInput] = useState({
    //     enteredDesc:'',
    //     enteredLocation:'',
    //     enteredDate:'',
    //     enteredPrice:''
    // })
    const locationChangeHandler = (event)=>{
        setEnteredLocation(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredLocation:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredLocation:event.target.value,
        //     }
        // })
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    //     setUserInput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredDate:event.target.value,
    //         }
    //     })
    };
    const descChangeHandler = (event) =>{
        setEnteredDesc(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDesc:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDesc:event.target.value,
        //     }
        // })
    };
    const priceChangeHandler = (event) =>{
        setEnteredPrice(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredPrice:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredPrice:event.target.value,
        //     }
        // })
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const obj = {
            desc:enteredDesc,
            price:enteredPrice,
            location:enteredLocation,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(obj);
        setEnteredDate('');
        setEnteredDesc('');
        setEnteredLocation('');
        setEnteredPrice('');
    }
    
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls"> 
            <div className="new-expense__control">
                <label>Location</label>
                <input type="text" value={enteredLocation} onChange={locationChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                <label>Description</label>
                <input type="text" value={enteredDesc} onChange={descChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="text" value={enteredPrice} onChange={priceChangeHandler} required/>
            </div>
        </div>
        <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>
    </form>
    )
}

export default ExpenseForm;