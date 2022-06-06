import React from 'react';
import '../css/CostItem.css';
import CostDateView from "./CostDateView";
import Card from "./Card";

const CostItems = (props) => {
    return (
        <Card className='cost-item'>
            <CostDateView date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
};

export default CostItems;