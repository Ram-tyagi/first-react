import './ExpenseItem.css';
function ExpenseItem() {
    const expenseLocation='Agra';
    return (
        <div className="expense-item">
            <div>March 4th 2023</div>
           <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div>{expenseLocation}</div>
           <div className="expense-item__price">Rs10000</div>
           </div>
        </div>
        
    )
  
}
export default ExpenseItem;