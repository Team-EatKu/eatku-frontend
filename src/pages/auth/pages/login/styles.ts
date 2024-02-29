import styled from "@emotion/styled";
import { Colors, Generators } from "@styles";

export const LoginContainer = styled.div`
  ${Generators.flexGenerator("column", "flex-start", "center")};
  background-color: ${Colors.White};
  gap: 2rem;
  padding-bottom: 4rem;
`;
