import styled from "@emotion/styled";
import { MapContainerProps } from "@typings/common/atom.ts";

export const MapContainer = styled.div<MapContainerProps>`
  ${(props) => props.customStyle};
`;
