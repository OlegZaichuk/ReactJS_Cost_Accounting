import React, {useState} from 'react';
import '../../css/CostForm.css';

const CostForm = (props) => {
    const [costName, setCostName] = useState('')
    const [costSum, setCostSum] = useState('')
    const [costDate, setCostData] = useState('')

    const addNewCost = (e) => {
        e.preventDefault();
        const sendDate = { data: new Date(costDate.replace(/-/g, '\/')), description: costName, amount: costSum};
        props.onNewCostData(sendDate);
        setCostName('');
        setCostSum('');
        setCostData('');
    }
    return (
        <form onSubmit={addNewCost}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Name</label>
                    <input value={costName} onChange={e => setCostName(e.target.value)} type='text'/>
                </div>
                <div className='new-cost__control'>
                    <label>Sum</label>
                    <input
                        value={costSum}
                        onChange={e => setCostSum(e.target.value)}
                        type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-cost__control'>
                    <label>Data</label>
                    <input value={costDate}
                           onChange={e => setCostData(e.target.value)}
                           type='date'
                           min='2019-01-01'/>
                </div>
                <div className='new-cost__actions'>
                    <button
                        type='submit'
                        // onClick={addNewCost}
                    >Add New</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;