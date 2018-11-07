import React from 'react'

const TypeTextarea = (props) => (
    <textarea 
        className={props.class ? props.class : ""}
        aria-label={props.placeholder} 
        id={props.name} 
        name={props.name}  
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
        required={props.required} />
    )

export default TypeTextarea