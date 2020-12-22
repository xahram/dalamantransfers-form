import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
    return (
        <div className={classes.Text}>
            <p>{props.name}</p>
            <input required={true} className={classes.Input} onChange={props.changeHandler} type={props.type} value={props.value} />
        </div>
    )
}

export default Input