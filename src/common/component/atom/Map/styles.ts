import styled from "@emotion/styled";
import { MapContainerProps } from "@typings/common/atom.ts";
import { Colors, Generators } from "@styles";

export const MapContainer = styled.div<MapContainerProps>`
  // 삭제 예정
  ${Generators.flexGenerator()};
  background-color: ${Colors.LightGray};
  font-size: 5rem;
  color: ${Colors.Gray};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 1rem;

  ${(props) => props.customStyle};
`;
