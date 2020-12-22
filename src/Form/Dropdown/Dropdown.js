import React from 'react'
import Options from './Options/Options'
import classes from './Dropdown.module.css'
const Dropdown = (props) => {

    return (<div className={classes.Dropdown}>
        <p>{props.label}</p>
        <select onChange={props.changeHandler} value={props.initialValue}>
            <option value={props.initialValue}>{props.initialValue}</option>
            <Options data={props.data} />
        </select>
    </div>)
}

export default Dropdown