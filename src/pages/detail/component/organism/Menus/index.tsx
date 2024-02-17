import { MenusProps } from "../../../typings/component/organism.ts";
import { MenusContainer } from "./styles.ts";
import { Menu } from "@pages/detail/component/molecule/index.ts";
import { TextView } from "@molecule/index.tsx";
import { Icons } from "@styles";

const Menus = ({ className, customStyle, ...props }: MenusProps) => {
  return (
    <MenusContainer
      className={`menus ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="menus__title">
        <TextView text={"메뉴"} icon={Icons.room_service} iconSize={"3.2rem"} />
      </div>
      <div className="menus__menu">
        <Menu name={"규동"} price={6000} />
        <Menu name={"가츠동"} price={7000} />
        <Menu name={"사케동"} price={10000} />
        <Menu name={"오야꼬동"} price={12000} />
      </div>
    </MenusContainer>
  );
};

export default Menus;
