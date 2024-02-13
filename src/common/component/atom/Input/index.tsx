import { InputProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { InputContainer } from "./styles.ts";

const Input = ({
  type = "text",
  width = "100%",
  height = "5rem",
  fontSize = "1.4rem",
  placeholder = "입력해주세요",
  value,
  onChange = () => {},
  disabled = false,
  className = "",
  customStyle = css``,
  ...props
}: InputProps) => {
  return (
    <InputContainer
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`input ${className}`}
      customStyle={customStyle}
      {...props}
    ></InputContainer>
  );
};

export default Input;
