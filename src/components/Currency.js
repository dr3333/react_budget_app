import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;

        // Dispatch a 'CHG_CURRENCY' action with the new currency value
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className='alert alert-primary' style={{ backgroundColor: '#dac5ed' }}>
            <label>Select Currency:  </label>
            <select id="currency" style={{ marginLeft: '0.5rem' , size: 10}} value={currency} onChange={handleCurrencyChange}>
                <option value="$">($) Dollar</option>
                <option value="£">(£) Pound</option>
                <option value="€">(€) Euro</option>
                <option value="₹">(₹) Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;