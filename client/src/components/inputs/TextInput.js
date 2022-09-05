import React from "react"
import "./TextInput.css"

function TextInput(props) {
  return (
    <>
      <div className="text-input-wrapper">
        <label>{props.label}</label>
        <input
          className="text-input"
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </>
  )
}

export default TextInput
