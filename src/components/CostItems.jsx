import React from 'react';
import '../css/CostItem.css';

const CostItems = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div className='cost-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            {/*<div>{props.date.toDateString()}</div>*/}
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </div>
    );
};

export default CostItems;