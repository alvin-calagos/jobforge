import React from "react";

function TextInput(props) {
  return (
    <>
      <div className="text-input-wrapper">
        <label>{props.label}</label>
        <input type="text" placeholder={props.placeholder} />
      </div>
    </>
  );
}

export default TextInput;
