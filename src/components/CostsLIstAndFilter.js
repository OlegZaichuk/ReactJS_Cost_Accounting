import React from 'react';
import CostItems from "./CostItems";
import Filter from "./Filter_UI/Filter";

const CostsLIstAndFilter = (props) => {
    return (
        <div>
            <Filter/>
            {props.filteredCost.map(costItem => <CostItems key={costItem.id} costItem={costItem}/>)}
        </div>
    );
};

export default CostsLIstAndFilter;