import React from 'react'
import classes from './Buttons.module.css'
import Button from './Button/Button'
import { currencies } from '../../utils/currency'
const temp = {}
for (let i = 0; i < currencies.length; i++) {
    temp[currencies[i].name] = { name: currencies[i].name, clicked: false }
}

const Buttons = (props) => {
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
        for (let i = 0; i < currencies.length; i++) {
            temp[currencies[i].name] = { name: currencies[i].name, clicked: false }
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
    return <div className={classes.Buttons}>
        <p>{props.label}</p>
        {buttons}
    </div>
}

export default Buttons