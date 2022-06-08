import React from 'react';
import '../css/CostItem.css';
import CostDateView from "./CostDateView";
import Card from "./Card";

const CostItems = (props) => {
    return (
        <Card className='cost-item'>
            <CostDateView date={props.costItem.data}/>
            <div className='cost-item__description'>
                <h2>{props.costItem.description}</h2>
                <div className='cost-item__price'>${props.costItem['amount']}</div>
            </div>
        </Card>
    );
};

export default CostItems;