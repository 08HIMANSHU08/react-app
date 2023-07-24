
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>
                <h2> Expense Item</h2>
                <p>Lucknow</p>
            </div>
            <div className='expense-item__description'>
                <p className='expense-item__price'>Food Rs 10</p>
                <p className='expense-item__price'>Petrol Rs 100</p>
                <p className='expense-item__price'>Movies Rs 200</p>
            </div>
        </div>
    )
}

export default ExpenseItem;

 