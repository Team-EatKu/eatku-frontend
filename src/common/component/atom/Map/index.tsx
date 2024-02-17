import { MapProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { MapContainer } from "./styles.ts";

const Map = ({
  width = "92rem",
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
      {`map ${Number(width.replace("rem", "")) * 10} x ${Number(height.replace("rem", "")) * 10}`}
    </MapContainer>
  );
};

export default Map;
