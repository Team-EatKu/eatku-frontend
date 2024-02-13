import { LogoProps } from "@typings/common/atom.ts";
import { LogoContainer } from "./styles.ts";
import { Image } from "@atom/index.tsx";
import logo from "@img/icon/logo.svg";

const Logo = ({ width = "15.3rem" }: LogoProps) => {
  return (
    <LogoContainer width={width}>
      <Image src={logo} width={"100%"} aspectRatio={"153 / 58"} />
    </LogoContainer>
  );
};

export default Logo;
