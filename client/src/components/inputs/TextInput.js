import React from "react"
import "./TextInput.css"

function TextInput(props) {
  return (
    <>
      <div className="text-input-wrapper">
        <label>{props.label}</label>
        <input
          className="form-control"
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  )
}

export default TextInput
