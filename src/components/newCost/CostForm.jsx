import React, {useState} from 'react';
import '../../css/CostForm.css';

const CostForm = (props) => {
    const [costName, setCostName] = useState('')
    const [costSum, setCostSum] = useState('')
    const [costDate, setCostData] = useState('')

    const clearFormData = () => {
        setCostName('');
        setCostSum('');
        setCostData('');
        props.onCloseForm();
    }

    const addNewCost = (e) => {
        e.preventDefault();
        const sendDate = { data: new Date(costDate.replace(/-/g, '/')), description: costName, amount: costSum};
        props.onNewCostData(sendDate);
        clearFormData();
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
                           min='2018-01-01'/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add New</button>

                    <button onClick={clearFormData}>Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default CostForm;