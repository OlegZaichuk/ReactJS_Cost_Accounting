import React, {useState} from 'react';
import CostItems from "./CostItems";
import '../css/Costs.css'
import Card from "./Card";
import CostFilter from "./CostFilter_UI/CostFilter";
import Diagram from "./Diagram_UI/Diagram";



const Costs = (props) => {
    const [currentYear, setCurrentYear] = useState('2019')
    const changeYear = (newYear) =>{
        setCurrentYear(newYear)
    }
    const filteredCost = props.costsList.filter(el => el.data.getFullYear().toString() === currentYear)
    const noCostList = <h2 className='cost-list__fallback'>No expenses this year</h2>

    const info = <div>
        <Diagram dataSet={filteredCost}/>
        {filteredCost.map(costItem => <CostItems key={costItem.id} costItem={costItem}/>)}
    </div>

    return (
        <Card className='costs'>
            <CostFilter year={currentYear} onChangeYear={changeYear} />

            {filteredCost.length === 0
                ? noCostList
                : info


            }
        </Card>
    );
};

export default Costs;