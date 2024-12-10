import { useState } from 'react';

function ExpenseForm(props) {
    const [name, setName] = useState('');
    const [population, setPopulation] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const populationHandler = (event) => {
        setPopulation(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newExpense = {
            name: name,
            flag: 'https://flagcdn.com/w320/' + name.toLowerCase() + '.png',
            population: population,
        };

        props.onAddExpense(newExpense);

        setName('');
        setPopulation('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={nameHandler} />
            </div>
            <div>
                <label>Population</label>
                <input type="text" value={population} onChange={populationHandler} />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
