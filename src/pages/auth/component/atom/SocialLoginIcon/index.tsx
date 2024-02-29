import { SocialLoginIconProps } from "@pages/auth/typings/component/atom.ts";
import { SocialLoginIconContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";

const SocialLoginIcon = ({
  icon,
  className = "",
  customStyle,
  ...props
}: SocialLoginIconProps) => {
  return (
    <SocialLoginIconContainer
      className={`login-divider ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <Image src={icon} width={"4.8rem"} variant={"circle"} />
    </SocialLoginIconContainer>
  );
};

export default SocialLoginIcon;
