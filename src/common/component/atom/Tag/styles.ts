import styled from "@emotion/styled";
import { TagContainerProps } from "@typings/common/atom.ts";
import { Colors, Generators } from "@styles";
import { CssType } from "@typings/commonType.ts";
import { css } from "@emotion/react";

export const TagVariants: CssType = {
  default: css`
    height: 3.5rem;
    ${Generators.flexGenerator()};
    display: inline-flex;
    border: 0.05rem solid ${Colors.Silver};
    border-radius: 3rem;
    padding: 0.8rem 2rem;
    color: ${Colors.Gray};

    ${Generators.fontGenerator("1.6rem", "300", "120%")}
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

export const TagContainer = styled.div<TagContainerProps>`
  ${TagVariants["default"]}
  ${(props) => props.variant && TagVariants[props.variant]}

  ${(props) => props.customStyle}
`;
