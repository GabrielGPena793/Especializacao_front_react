import React from "react";
import { useRef } from "react";
import { useFormContext } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => { 
  const { dispatch } = useFormContext()

  const inputRef = useRef(null)

  const onBlur = () => {
    const fieldValue = inputRef.current.value;
    const index = name.indexOf("Pokemon")
    let field;
    console.log(index < 0)

    if(index >= 0){
      field = name.slice(0, index)
    }else {
      field = name;
    }

    dispatch({
      type: name.includes("Pokemon") ? "UPDATE_POKEMON" : "UPDATE_TRAINER",
      payload: {[field] : fieldValue}
    })
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        ref={inputRef}
        id={name}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
