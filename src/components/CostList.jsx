import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CostFilter from './CostFilter';
import CostCard from './CostCard';
import CostsDiagram from './CostsDiagram';

function CostList(props) {
    const { costs, removeCost } = props;

    let [year, setYear] = useState('');

    const costsFilterYear = costs.filter(
        (cost) => String(cost.date.getFullYear()) === year
    );

    const filterYear = (year) => {
        setYear(year);
    };
    if (!costs.length) {
        return (
            <div className="cost-card__wrap">
                <h2 className="cost-card__title-none">
                    У вас пока нет расходов! 😌
                </h2>
            </div>
        );
    }
    if (!year) {
        return (
            <div className="cost-card-list">
                <CostFilter costs={costs} filterYear={filterYear} year={year} />
                <CostsDiagram costsFilterYear={costs} />

                <TransitionGroup className="cost-card-list">
                    {costs.map((cost) => (
                        <CSSTransition
                            key={cost.id + 2}
                            timeout={500}
                            classNames="item"
                        >
                            <CostCard
                                key={cost.id}
                                date={cost.date}
                                title={cost.title}
                                amount={cost.amount}
                                id={cost.id}
                                removeCost={removeCost}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
    return (
        <div className="cost-card-list">
            <CostFilter costs={costs} filterYear={filterYear} year={year} />
            <CostsDiagram costsFilterYear={costsFilterYear} />
            {console.log('hello')}
            {costsFilterYear.length ? (
                costsFilterYear.map((cost) => (
                    <CostCard
                        key={cost.id}
                        date={cost.date}
                        title={cost.title}
                        amount={cost.amount}
                        id={cost.id}
                        removeCost={removeCost}
                    />
                ))
            ) : (
                <h2>У вас пока нет расходов за этот год</h2>
            )}
        </div>
    );
}
export default CostList;
