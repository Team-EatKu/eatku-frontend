import styled from "@emotion/styled";
import { InputContainerProps } from "@typings/common/atom.ts";
import { Colors } from "@styles";

export const InputContainer = styled.input<InputContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0 2rem;
  border: 0.07rem solid ${Colors.Silver};
  border-radius: 1rem;
  font-size: ${(props) => props.fontSize};
  ${(props) => props.customStyle};

  &::placeholder {
    color: ${Colors.Silver};
  }

  &:focus {
    outline: none !important;
    border-color: ${Colors.Primary01};
  }
`;
