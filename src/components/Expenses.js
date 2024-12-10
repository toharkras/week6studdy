import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function Expenses() {
    const [items, setItems] = useState([
        { name: "France", flag: "https://flagcdn.com/w320/fr.png", population: 67081000 },
        { name: "Germany", flag: "https://flagcdn.com/w320/de.png", population: 83155000 },
        { name: "Japan", flag: "https://flagcdn.com/w320/jp.png", population: 125800000 },
    ]);

    const addExpenseHandler = (newExpense) => {
        setItems((prevItems) => {
            return [...prevItems, newExpense];
        });
    };

    return (
        <div>
            <ExpenseForm onAddExpense={addExpenseHandler} />
            {items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    name={item.name}
                    flag={item.flag}
                    population={item.population}
                />
            ))}
        </div>
    );
}

export default Expenses;
