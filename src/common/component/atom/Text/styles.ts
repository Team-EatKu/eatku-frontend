import styled from "@emotion/styled";
import { TextContainerProps } from "@typings/common/atom.ts";
import { Generators } from "@styles";

export const TextContainer = styled.div<TextContainerProps>`
  color: ${(props) => props.color};
  ${(props) =>
    Generators.fontGenerator(
      props.fontSize,
      props.fontWeight,
      props.lineHeight,
      props.letterSpacing,
      props.fontStyle,
    )};

  & > div.text__line {
    margin-bottom: 0.4rem;
  }

  ${(props) => props.customStyle};
`;
