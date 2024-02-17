import styled from "@emotion/styled";
import { Colors, Generators } from "@styles";

export const DetailContainer = styled.div`
  ${Generators.flexGenerator("column")};
  gap: 2rem;
  background-color: ${Colors.BgGray};
  min-height: 100vh;
`;
