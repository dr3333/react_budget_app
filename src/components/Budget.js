import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseFloat(event.target.value);

        if (newBudgetValue > 20000) {
            // Alert if budget exceeds 20000
            alert('Budget can not exceed 20000')
        }
        else if (!isNaN(newBudgetValue) && newBudgetValue >= 0) {
            // Dispatch a 'SET_BUDGET' action with the new budget value
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
            setNewBudget(newBudgetValue); // Update the local state as well
        } else {
            alert('Please enter a valid positive number for the budget.');
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;