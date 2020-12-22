import React from 'react'
import classes from './Button.module.css'
const Button = (props) => {
    const cssClasess = [classes.Button]
    if (props.clicked) { cssClasess.push(classes.Border) }
    return <button key={props.key} className={cssClasess.join(" ")} onClick={() => { props.currencyButtonHandler(props.identifier) }}>{props.name}</button>

}

export default Button