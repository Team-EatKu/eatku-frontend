import { SignUpHeaderProps } from "@pages/auth/typings/component/organism.ts";
import { SignUpHeaderContainer } from "./styles.ts";

const SignUpHeader = ({
  step,
  className = "",
  customStyle,
  ...props
}: SignUpHeaderProps) => {
  return (
    <SignUpHeaderContainer
      className={`sign-up-header ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="sign-up-header__title">뭐먹을건대 ID를 생성하세요.</div>
      <div className="sign-up-header__welcome">
        {step === "email"
          ? "건국대학교 주변 맛집 서비스에 오신 것을 환영합니다. 등록을 완료하고 건국대 맛집을 만나보세요."
          : step === "code"
            ? "이메일로 6자리 코드를 보냈습니다. 코드를 입력하고 이메일을 인증하세요."
            : step === "nickName"
              ? "서비스 이용 시 사용할 닉네임을 입력해주세요. 이 닉네임은 서비스 내에서 다른 사용자들에게도 보여집니다."
              : step === "password"
                ? "마지막 단계입니다. 비밀번호를 설정하고 계정을 생성하세요."
                : ""}
      </div>
    </SignUpHeaderContainer>
  );
};

export default SignUpHeader;
