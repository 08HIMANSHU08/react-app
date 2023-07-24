
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props) {
    // console.log(props)
    return (
        <div>
            <div className='expense-item'> 
            <ExpenseDate date ={props.date}></ExpenseDate>
            <ExpenseDetails location={props.location} desc={props.desc} price={props.price}></ExpenseDetails> 
            </div>  
        </div>
    )
}

export default ExpenseItem;

/* <div className='expense-item'> 
<div className='expense-item__description'>
    <p>Kanpur</p>
    <div className='expense-item__price'>Movies Rs 200</div>
</div>   
</div>
<div className='expense-item'> 
<div className='expense-item__description'>
    <p>Prayagraj</p>
    <div className='expense-item__price'>Petrol Rs 100</div>
</div>
</div>  */