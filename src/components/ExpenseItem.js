
import './ExpenseItem.css';

function ExpenseItem(props) {
    console.log(props)
    return (
        <div>
            <div className='expense-item'> 
                <div className='expense-item__description'>
                    <p>{props.location}</p>
                    <p>{props.desc}</p>
                    <div className='expense-item__price'> Rs {props.price}</div>
                </div>  
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