import React from 'react'

/**
 * Input type **text**
 *
 * @prop {string} name (required)
 * @prop {string} placeholder (required)
 * @prop {string} type (optional) If not provided, **text** is the default
 * @prop {string} value (required)
 * @function onChange (required)
 * @prop {boolean} required (optional) If **true** this input is required to fill
 * @prop {boolean} autofocus (optional) If **true** this input will be selected by default
 * @prop {boolean} autocomplete (optinonal) provide **on** to enabled
 * @prop {string} maxlength (optional) NOTE: provide a string as a **number**. Ex: "120"
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
        autoComplete={props.autocomplete}
        maxLength={props.maxlength ? props.maxlength : ""} 
        />
    )

export default TypeText