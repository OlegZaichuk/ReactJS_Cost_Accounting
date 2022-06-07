import React, {useState} from 'react';
import '../css/CostItem.css';
import CostDateView from "./CostDateView";
import Card from "./Card";

const CostItems = (props) => {
    const [description, setDescription] = useState(props.description)
    // const changeDescriptionHandler = () => {
    //     setDescription("new")
    // }
    return (
        <Card className='cost-item'>
            <CostDateView date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            {/*<button onClick={changeDescriptionHandler}>Change Dsc</button>*/}
        </Card>
    );
};

export default CostItems;