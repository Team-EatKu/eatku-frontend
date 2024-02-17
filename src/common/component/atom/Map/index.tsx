import { MapProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { MapContainer } from "./styles.ts";

const Map = ({
  width = "100%",
  height = "29.4rem",
  className = "",
  customStyle = css``,
  ...props
}: MapProps) => {
  return (
    <MapContainer
      width={width}
      height={height}
      className={`map ${className}`}
      customStyle={customStyle}
      {...props}
    >
      {`map`}
    </MapContainer>
  );
};

export default Map;
