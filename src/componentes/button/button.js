import React from "react";
import { Button } from "./styles";

const ButtonComponent = ({
  label,
  type,
  onClick,
  variant,
  width,
  margin,
  disabled,
  fullWidthMobile,
  style,
  children,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      width={width}
      margin={margin}
      disabled={disabled}
      fullWidthMobile={fullWidthMobile}
      style={style}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
