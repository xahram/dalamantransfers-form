import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import { places as destinations } from '../utils/destinations'
import { countries } from '../utils/countries'
import { cars } from '../utils/cars'

import Buttons from './Buttons/Buttons'
import classes from './Form.module.css'
import Input from './Input/Input'
import ReturnButtons from './Buttons/ReturnButtons/ReturnButtons'
const Form = (props) => {
    const [Origin, setOrigin] = React.useState("Select The Origin")
    const onChangeHandler = (e) => {
        setOrigin(e.target.value)
    }
    return (<div className={classes.Form}>
        <p>Find your transfer</p>
        <div className={classes.DropDown}>
            <Dropdown changeHandler={onChangeHandler} label={"Origin"} initialValue={Origin} data={destinations} />
            <Dropdown changeHandler={onChangeHandler} label={"Destination"} initialValue={"Select The Destination"} data={destinations} />

            <ReturnButtons label={"Type of transfer"} />
            <Buttons label={"Currency you wish to pay with"} />

            <Dropdown changeHandler={onChangeHandler} label={"Cars"} initialValue={"Select The Cars"} data={cars} />
            <div className={classes.Price}>
                <p>Total Price / Per Vehicle</p>
                <p>60$</p>
            </div>
        </div>
        <div className={classes.Input}>
            <Input name={"Name,Surname"} type={"text"} changeHandler={onChangeHandler} />
            <Input name={"Email address"} type={"text"} changeHandler={onChangeHandler} />
            <Input name={"Mobile Number"} type={"text"} changeHandler={onChangeHandler} />
            <Input name={"Pick-up Date"} type={"date"} changeHandler={onChangeHandler} />
            <Input name={"Pick-up point in"} type={"textarea"} changeHandler={onChangeHandler} />
            <Input name={"Drop-off point in"} type={"textarea"} changeHandler={onChangeHandler} />
        </div>
    </div>)
}

export default Form