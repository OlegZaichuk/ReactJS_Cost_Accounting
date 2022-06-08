import React from 'react';
import './Diagram.css'
import DiagramBar from "./DiagramBar";
import Card from "../Card";

let diagramDataStart = [
    {label: 'Jan', value: 0}, {label: 'Feb', value: 0}, {label: 'Mar', value: 0}, {label: 'Apr', value: 0},
    {label: 'May', value: 0}, {label: 'Jun', value: 0}, {label: 'Jul', value: 0}, {label: 'Aug', value: 0},
    {label: 'Sep', value: 0}, {label: 'Oct', value: 0}, {label: 'Nov', value: 1}, {label: 'Dec', value: 0},
]

const Diagram = (props) => {
    props.dataSet.map(monthInfo => diagramDataStart[monthInfo.data.getMonth()].value += monthInfo.amount)
    const maxMonthAmount = Math.max(...diagramDataStart.map(o => o.value))
    return (
        <Card className='diagram'>
            {diagramDataStart.map(infoByMonth =>
                <DiagramBar key={infoByMonth.label} monthInfo={infoByMonth} maxValue={maxMonthAmount} />)}
        </Card>
    );
};

export default Diagram;