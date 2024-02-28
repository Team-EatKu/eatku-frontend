import styled from "@emotion/styled";
import { Colors, Generators } from "@styles";

export const MainContainer = styled.div`
  ${Generators.flexGenerator("column", "flex-start", "center")};
  background-color: ${Colors.BgGray};
  gap: 2rem;
  padding-bottom: 4rem;

  & > img.image {
    position: absolute;
    top: 10rem;
  }

  & > div {
    z-index: 10;
  }
`;
