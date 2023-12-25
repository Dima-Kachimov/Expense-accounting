import React, { useState } from 'react';
import CostList from './components/CostList';
import NewCost from './components/NewCost/NewCost';

function App() {
    const [costs, setCosts] = useState([
        {
            date: new Date(2020, 2, 13),
            title: 'Laptop',
            amount: 890,
            id: 12332,
        },
        {
            date: new Date(2022, 6, 17),
            title: 'Phone',
            amount: 400,
            id: 135876,
        },
        {
            date: new Date(2023, 8, 4),
            title: 'Car',
            amount: 10580,
            id: 1267396,
        },
    ]);

    // Delete cost
    const removeCost = (id) => {
        setCosts(costs.filter((cost) => cost.id !== id));
    };

    // Add cost
    const setNewCost = (cost) => {
        console.log('hello from  app');
        setCosts([cost, ...costs]);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <NewCost setNewCost={setNewCost} />
                </div>
                <div className="container">
                    <CostList costs={costs} removeCost={removeCost} />
                </div>
            </div>
        </div>
    );
}

export default App;
