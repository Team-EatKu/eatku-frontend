import { TextViewProps } from "@typings/common/molecule.ts";
import { TextViewContainer } from "./styles.ts";
import { Icon, Text } from "@atom/index.tsx";
import { Colors } from "@styles";

const TextView = ({
  icon,
  text,
  color = Colors.Gray,
  iconSize = "2.4rem",
  className,
  customStyle,
  ...props
}: TextViewProps) => {
  return (
    <TextViewContainer
      className={`text-view ${className}`}
      customStyle={customStyle}
      {...props}
    >
      {icon && (
        <Icon icon={icon} size={iconSize} className={"text-view__icon"} />
      )}
      <Text
        text={text}
        color={color}
        fontSize={"2rem"}
        fontWeight={"300"}
        lineHeight={"2.4rem"}
      />
    </TextViewContainer>
  );
};

export default TextView;
