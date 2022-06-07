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
    return (
        <Card className='costs'>
            <CostFilter year={currentYear} onChangeYear={changeYear} />
            {props.costsList.filter(el => el.data.getFullYear() == currentYear).
            map(costItem => <CostItems key={costItem.id} date={costItem.data} description={costItem.description} amount={costItem.amount}/>)}
        </Card>
    );
};

export default Costs;