import React, {useState} from 'react';
import CostItems from "./CostItems";
import '../css/Costs.css'
import Card from "./Card";
import CostFilter from "./CostFilter_UI/CostFilter";

// function isYear(in_data, curYear) {
//     return  in_data.data == curYear
// }

const Costs = (props) => {
    const [currentYear, setCurrentYear] = useState('2019')
    const changeYear = (newYear) =>{
        setCurrentYear(newYear)
    }

    const filteredCost = props.costsList.filter(el => el.data.getFullYear().toString() === currentYear)
    const noCostList = <h2 className='cost-list__fallback'>No expenses this year</h2>


    return (
        <Card className='costs'>
            <CostFilter year={currentYear} onChangeYear={changeYear} />
            {filteredCost.length === 0 ? noCostList :
                filteredCost.map(costItem => <CostItems key={costItem.id} costItem = {costItem}/>)}
        </Card>
    );
};

export default Costs;