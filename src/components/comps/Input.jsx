import React from "react";
import css from "../../styles/form.css";

const { Input } = css;

const InputComponent = (props) => {
  const { placeholder, maxLength } = props.params;

  return (
    <React.Fragment>
      <Input
        type={"text"}
        placeholder={placeholder}
        maxLength={maxLength}
      ></Input>
    </React.Fragment>
  );
};

export default InputComponent;
