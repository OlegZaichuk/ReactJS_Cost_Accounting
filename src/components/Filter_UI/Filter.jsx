import React, {useState} from 'react';
import './Filter.css';
import Card from "../Card";

const Filter = () => {
    const [arrowDirection, setArrowDirection] = useState("arrow arrow-top")
    const changeArrowHandler = () => {
         arrowDirection === 'arrow arrow-top'
             ? setArrowDirection('arrow arrow-bottom')
             : setArrowDirection('arrow arrow-top')
    }

    const sortController =
        <div className="form-group">
            <select>
                <option value="2022">No search</option>
                <option value="2021">By name</option>
                <option value="2020">By amount</option>
                <option value="2020">By date</option>
            </select>
            <div className="round" onClick={changeArrowHandler}>
                <span className={arrowDirection}></span>
            </div>
        </div>

    const searchController =
        <div className="form-group">
            <input className="form-field" type="text"/>
            <select>
                <option value="2022">No search</option>
                <option value="2021">By name</option>
                <option value="2020">By amount</option>
            </select>
        </div>



    return (
        <Card className='filter '>
            <div className=''> {sortController} </div>
            <div className='costs-filter'> {searchController} </div>

        </Card>
    );
};

export default Filter;