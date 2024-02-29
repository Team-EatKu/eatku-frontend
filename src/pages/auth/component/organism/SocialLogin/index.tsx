import { SocialLoginProps } from "@pages/auth/typings/component/organism.ts";
import { SocialLoginContainer } from "./styles.ts";
import { SocialLoginIcon } from "@pages/auth/component/atom/index.ts";

import appleLogo from "@img/icon/apple-logo.jpg";
import googleLogo from "@img/icon/google-logo.webp";
import naverLogo from "@img/icon/naver-logo.svg";
import kakaoLogo from "@img/icon/kakao-logo.svg";

const SocialLogin = ({
  className = "",
  customStyle,
  ...props
}: SocialLoginProps) => {
  return (
    <SocialLoginContainer
      className={`social-login ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <SocialLoginIcon icon={appleLogo} />
      <SocialLoginIcon icon={googleLogo} />
      <SocialLoginIcon icon={naverLogo} />
      <SocialLoginIcon icon={kakaoLogo} />
    </SocialLoginContainer>
  );
};

export default SocialLogin;
