import React from 'react';
import '../../css/NewCost.css';
import CostForm from "./CostForm";

const NewCost = (props) => {
    const newCostDataHandler = (newCostData) => {
        const newCostDataOut = {
            ...newCostData,
            id: Math.random().toString()
        };
        props.onAddCost(newCostDataOut);
    }

    return (


        <div className='new-cost'>
            <CostForm onNewCostData={newCostDataHandler}/>
        </div>
    );
};

export default NewCost;