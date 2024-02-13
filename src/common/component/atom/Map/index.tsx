import { MapProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { MapContainer } from "./styles.ts";

const Map = ({ className = "", customStyle = css``, ...props }: MapProps) => {
  return (
    <MapContainer
      className={`map ${className}`}
      customStyle={customStyle}
      {...props}
    ></MapContainer>
  );
};

export default Map;
