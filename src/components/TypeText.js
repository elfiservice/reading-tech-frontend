import React from 'react'

/*
    props requireds
    @param name
    @placeholder
    @value
    @type (default is 'text')

*/
const TypeText = (props) => (
    <input 
        aria-label={props.placeholder} 
        id={props.name} 
        name={props.name}  
        type={props.type ? props.type : "text"} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        autoFocus={props.autofocus}
        autoComplete={props.name}
        maxLength={props.maxlength ? props.maxlength : ""} 
        />
    )

export default TypeText