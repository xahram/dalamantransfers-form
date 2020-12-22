import React from 'react'
import classes from './ReturnButtons.module.css'
import Button from '../Button/Button'
import { typeOfTransfer } from '../../../utils/currency'
const temp = {}
for (let i = 0; i < typeOfTransfer.length; i++) {
    temp[typeOfTransfer[i].name] = { name: typeOfTransfer[i].name, clicked: false }
}

const ReturnButtons = (props) => {
    const [Buttonconfig, setButtonconfig] = React.useState(temp)

    const buttonElementArray = [];
    for (let key in Buttonconfig) {
        buttonElementArray.push({
            id: key,
            config: Buttonconfig[key]
        });
    }
    const currencyButtonHandler = (key) => {
        const temp = {}
        for (let i = 0; i < typeOfTransfer.length; i++) {
            temp[typeOfTransfer[i].name] = { name: typeOfTransfer[i].name, clicked: false }
        }
        console.log(key)
        temp[key].clicked = true
        setButtonconfig(temp)
    }
    const buttons = buttonElementArray.map((btn) => {
        console.log(btn)
        return <Button
            name={btn.config.name}
            key={btn.id}
            identifier={btn.id}
            clicked={btn.config.clicked}
            currencyButtonHandler={currencyButtonHandler} />
    })
    return <div className={classes.ReturnButtons}>
        <p>{props.label}</p>
        {buttons}
    </div>
}

export default ReturnButtons