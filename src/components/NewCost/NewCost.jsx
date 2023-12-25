import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CostForm from './CostForm';
import OpenForm from './OpenForm';

function NewCost(props) {
    const { setNewCost } = props;

    const [isOpenForm, setIsOpenForm] = useState(false);

    const hanleOpenForm = (isOpen) => {
        setIsOpenForm(isOpen);
    };
    return (
        <CSSTransition in={isOpenForm} timeout={500} classNames="form">
            <div>
                {isOpenForm ? (
                    <CostForm
                        setNewCost={setNewCost}
                        hanleOpenForm={hanleOpenForm}
                    />
                ) : (
                    <OpenForm hanleOpenForm={hanleOpenForm} />
                )}
            </div>
        </CSSTransition>
    );
}
export default NewCost;
