import styled from "@emotion/styled";
import { ButtonContainerProps } from "@typings/common/atom.ts";
import { CssType } from "@typings/commonType.ts";
import { css } from "@emotion/react";
import { Colors, Generators } from "@styles";

const defaultStyle = css`
  width: 100%;
  ${Generators.flexGenerator()};
  gap: 0.4rem;
`;
export const ButtonVariants: CssType = {
  primary: css`
    background-color: ${Colors.Primary01};
    border: 1px solid ${Colors.Primary01};
    color: ${Colors.White};

    & > span.icon {
      color: ${Colors.White};
    }
  `,
  outline: css`
    background-color: ${Colors.White};
    border: 1px solid ${Colors.Primary01};
    color: ${Colors.Primary01};

    & > span.icon {
      color: ${Colors.Primary01};
    }
  `,
  disabled: css`
    background-color: ${Colors.Primary02};
    opacity: 0.5;
    border: 1px solid ${Colors.Primary02};
    color: ${Colors.White};

    & > span.icon {
      color: ${Colors.White};
    }
  `,
};
export const ButtonSizes: CssType = {
  small: css`
    border-radius: 0.4rem;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  `,
  medium: css`
    height: 5rem;
    border-radius: 0.6rem;
    font-size: 1.6rem;
    padding: 0.6rem 1.2rem;
  `,
  large: css`
    border-radius: 0.8rem;
    font-size: 2rem;
    padding: 0.8rem 1.6rem;
  `,
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${defaultStyle}

  ${(props) => props.variant && ButtonVariants[props.variant]}
  ${(props) => props.size && ButtonSizes[props.size]}

  ${(props) => props.customStyle}
`;
