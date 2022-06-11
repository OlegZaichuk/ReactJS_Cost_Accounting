import React, {useState} from 'react';
import '../css/Costs.css'
import Card from "./Card";
import CostFilter from "./CostFilter_UI/CostFilter";
import Diagram from "./Diagram_UI/Diagram";
import CostsLIstAndFilter from "./CostsLIstAndFilter";
import Loader from "./Loader_UI/loader";



const Costs = (props) => {
    const [currentYear, setCurrentYear] = useState('2019')
    const changeYear = (newYear) =>{
        setCurrentYear(newYear)
    }
    const filteredCost = props.costsList.filter(el => el.data.getFullYear().toString() === currentYear)
    const noCostList =
        <div>
            {/*<h2 className='cost-list__fallback'>No expenses this year</h2>*/}
            <Loader className='cost-list__fallback'>
                No expenses this year
            </Loader>
        </div>

    const info = <div>
        <Diagram dataSet={filteredCost}/>
        <CostsLIstAndFilter filteredCost={filteredCost} />
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