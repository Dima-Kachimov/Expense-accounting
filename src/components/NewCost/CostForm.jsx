import React, { useState } from 'react';

function CostForm(props) {
    const { setNewCost, hanleOpenForm } = props;

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // New State Form
    const handleSetValueInput = (e) => {
        console.log(e.target.name);
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        }
        if (e.target.name === 'amount') {
            setAmount(e.target.value);
        }
        if (e.target.name === 'date') {
            setDate(e.target.value);
        }
    };

    // Data Form
    const handleSubmitNewCost = (e) => {
        e.preventDefault();
        if (!date || !title || !amount) {
            alert('Fill in all the details of your expense!');
            return;
        }
        const [year, month, day] = date.split('-');

        const newCost = {
            title,
            amount,
            date: new Date(year, month - 1, day),
            id: Math.random(),
        };
        setNewCost(newCost);

        setTitle('');
        setAmount('');
        setDate('');

        hanleOpenForm(false);
    };

    // Cencel Form
    const cancelForm = () => {
        setTitle('');
        setAmount('');
        setDate('');

        hanleOpenForm(false);
    };

    return (
        <form className="new-cost-form" onSubmit={handleSubmitNewCost}>
            <label>
                <input
                    className="name-cost"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleSetValueInput}
                    placeholder="Expense name"
                />
            </label>
            <label>
                <input
                    className="amount-cost"
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleSetValueInput}
                    placeholder="amounts"
                />
            </label>
            <label>
                <input
                    className="date-cost"
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleSetValueInput}
                    placeholder=""
                />
            </label>
            <button className="add-cost" type="submit">
                New expense
            </button>
            <button type="button" className="cancel-cost" onClick={cancelForm}>
                Cancel
            </button>
        </form>
    );
}
export default CostForm;
