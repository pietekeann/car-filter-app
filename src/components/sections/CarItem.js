import React from 'react';
import Card from '../ui/Card';
import classes from './CarItem.module.css';

function CarItem(props) {
    return ( 
    <li className={classes.item}>
        <Card>
        <div className={classes.content}>
            <h3>{props.name}</h3>
            <hr className={classes.line}></hr>
            <p><b>Model ID:</b> {props.id}</p>
            <p><b>Model Name:</b> {props.model_name}</p>
        </div>
        </Card>
        </li>
    );
}

export default CarItem;
