import React from 'react';
import CostItems from "./CostItems";
import '../css/Costs.css'
import Card from "./Card";

const Costs = (props) => {
    return (
        <Card className='costs'>
            {props.costsList.map(costItem => <CostItems key={costItem.id} date={costItem.data} description={costItem.description}
                                              amount={costItem.amount}/>)}
        </Card>
    );
};

export default Costs;