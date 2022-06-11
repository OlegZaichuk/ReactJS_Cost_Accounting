import React from 'react';
import './loader.css';

const Loader = (props) => {
    return (
        <div className='test'>
            <div className='loader-container'>
                <h2 className='ring'/>
                <h2 className='ring'/>
                <h2 className='ring'/>
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Loader;