import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseFloat(event.target.value);

        if (!isNaN(newBudgetValue) && newBudgetValue >= 0) {
            // Dispatch a 'SET_BUDGET' action with the new budget value
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
            setNewBudget(newBudgetValue); // Update the local state as well
        } else {
            alert('Please enter a valid positive number for the budget.');
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;