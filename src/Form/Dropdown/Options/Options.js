import React from 'react'

const Options = (props) => {
    const options = props.data.map((value) => {
        return <option key={value.name} value={value.name}>{value.name}</option>
    })
    return options
}

export default Options