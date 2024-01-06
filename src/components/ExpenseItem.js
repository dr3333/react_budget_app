import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"; // Corrected import statements

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td><FaMinusCircle style={{ color: '#cf1325', marginLeft: '2.5rem' }} size='1.5em' onClick={() => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><FaPlusCircle style={{ color: '#09b53d', marginLeft: '2.5rem' }} size='1.5em' onClick={() => increaseAllocation(props.name)}></FaPlusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

//<button className='circular-button' onClick={() => increaseAllocation(props.name)} style={{ marginLeft: '0.5rem' }}>
