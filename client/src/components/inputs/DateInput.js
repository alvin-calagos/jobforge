import React from "react"

function DateInput(props) {
  const date = new Date()
  const defaultValue = date.toLocaleDateString("en-CA")

  return (
    <>
      <div className="text-input-wrapper">
        <label>{props.label}</label>
        <input
          type="date"
          placeholder={props.placeholder}
          defaultValue={defaultValue}
          value-={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  )
}

export default DateInput
