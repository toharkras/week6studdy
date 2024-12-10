
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <img src={props.flag} alt={props.name} />
            <div className="expense-item_description">{props.name}</div>
            <div className="expense-item_price">{props.population}</div>
        </div>
    );
}

export default ExpenseItem;
