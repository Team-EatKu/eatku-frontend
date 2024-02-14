import { TextProps } from "@typings/common/atom.ts";
import { css } from "@emotion/react";
import { TextContainer } from "./styles.ts";
import { Colors } from "@styles";

const Text = ({
  text,
  color = Colors.Black,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontStyle,
  className = "",
  customStyle = css``,
  ...props
}: TextProps) => {
  return (
    <TextContainer
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      fontStyle={fontStyle}
      className={`text ${className}`}
      customStyle={customStyle}
      {...props}
    >
      {Array.isArray(text)
        ? text.map((line) => {
            return <div className="text__line">{line}</div>;
          })
        : text}
    </TextContainer>
  );
};

export default Text;
