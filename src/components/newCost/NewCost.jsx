import React, {useState} from 'react';
import '../../css/NewCost.css';
import CostForm from "./CostForm";

const NewCost = (props) => {
    const [isState, isSetState ] = useState(false)

    const closeFormHandler = () => {
        isSetState(false)
    }

    const newCostDataHandler = (newCostData) => {
        const newCostDataOut = {
            ...newCostData,
            id: Math.random().toString()
        };
        props.onAddCost(newCostDataOut);
        console.log('newCostDataHandler')
        console.log(newCostDataOut)
    }

    const buttonOpen = <div className='cost-list__fallback'>
                             <button onClick={() => isSetState(true)}>Open form</button>
                       </div>
    const costForm = <CostForm className='new-cost__actions' onCloseForm={closeFormHandler} onNewCostData={newCostDataHandler}/>


    return (

        <div className='new-cost'>
            { isState ? costForm : buttonOpen}



        </div>
    );
};

export default NewCost;