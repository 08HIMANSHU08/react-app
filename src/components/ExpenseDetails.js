
import './ExpenseItem.css';


function ExpenseDetails(props) {
    return (
        <div className='expense-item__description'>
            <p>{props.location}</p>
            <p>{props.desc}</p>
            <div className='expense-item__price'>Rs {props.price}</div>
        </div>
        )
}

export default ExpenseDetails
