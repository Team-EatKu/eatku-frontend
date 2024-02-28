import styled from "@emotion/styled";
import { Colors, Generators } from "@styles";

export const SearchContainer = styled.div`
  ${Generators.flexGenerator("column", "flex-start", "center")};
  background-color: ${Colors.BgGray};
  gap: 2rem;
  padding-bottom: 4rem;
`;
