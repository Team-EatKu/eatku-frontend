import styled from "@emotion/styled";
import { ReviewContainerProps } from "../../../typings/component/organism.ts";
import { Colors, Generators } from "@styles";

export const ReviewContainer = styled.div<ReviewContainerProps>`
  ${(props) => props.customStyle};
`;
