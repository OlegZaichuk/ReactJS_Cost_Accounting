import React from 'react';
import '../css/CostItem.css';

const CostItems = () => {
    const costDate = new Date(2022,3,14)
    const costDescription = 'Refrigerator'
    const costAmount = 99.7
    return (
        <div className='cost-item'>
            <div>{costDate.toDateString()}</div>
            <div className='cost-item__description'>
                <h2>{costDescription}</h2>
                <div className='cost-item__price'>${costAmount}</div>
            </div>
        </div>
    );
};

export default CostItems;