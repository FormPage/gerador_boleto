import { flexbox } from "@mui/system";
import React from "react";

import { Label, Input } from "./styles";

const InputComponent = ({
  editing,
  label,
  placeholder,
  name,
  onChange,
  type,
  value,
  required,
  marginBottom,
  disabled,
  isInvalid,
  min,
  max,
  defaultValue,
  isInvalidMsg,
  maxLength,
  minLength,
  showPassword,
  onClick,
  isPassword,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        {label && <Label>{label}: </Label>}
        <Input
          defaultValue={defaultValue}
          editing={editing}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          required={required}
          marginBottom={marginBottom}
          disabled={disabled}
          isInvalid={isInvalid}
        />
      </div>
      {isInvalid && <Label error>{isInvalidMsg}</Label>}
    </>
  );
};

export default InputComponent;
