import styled from "@emotion/styled";
import { Colors, Generators } from "@styles";

export const MainContainer = styled.div`
  ${Generators.flexGenerator()};
  background-color: ${Colors.BgGray};
  gap: 2rem;
  min-height: 100vh;
`;
