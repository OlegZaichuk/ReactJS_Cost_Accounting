import React from 'react';

const Card = (props) => {
    const classes = `card_border ${props.className}`
    return (
        <div className={classes}>{props.children}</div>
    );
};

export default Card;