import styled from "@emotion/styled";
import { TagContainerProps } from "@typings/common/atom.ts";
import { Colors, Generators } from "@styles";
import { CssType } from "@typings/commonType.ts";
import { css } from "@emotion/react";

export const TagVariants: CssType = {
  default: css`
    ${Generators.flexGenerator()};
    display: inline-flex;
    border: 0.05rem solid ${Colors.Silver};
    color: ${Colors.Gray};

    & > span.icon {
      color: ${Colors.Gray};
      font-weight: 200;
    }
  `,
  active: css`
    border-color: ${Colors.Primary01};
    color: ${Colors.Primary01};
  `,
  hashtag: css`
    color: ${Colors.GrayGreen};
  `,
};

export const TagSizes: CssType = {
  medium: css`
    height: 3.5rem;
    min-width: 8.7rem;
    border-radius: 3rem;
    padding: 0.8rem 2rem;
    ${Generators.fontGenerator("1.6rem", "300", "120%")}
  `,
  small: css`
    height: 2.8rem;
    min-width: 5.8rem;
    border-radius: 1.5rem;
    ${Generators.fontGenerator("1.3rem", "300", "120%")}
  `,
};

export const TagContainer = styled.div<TagContainerProps>`
  ${TagVariants["default"]}
  ${(props) => props.variant && TagVariants[props.variant]}
  ${(props) => props.size && TagSizes[props.size]}

  ${(props) => props.customStyle}
`;
