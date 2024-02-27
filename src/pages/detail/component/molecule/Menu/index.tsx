import { MenuProps } from "../../../typings/component/molecule.ts";
import { MenuContainer } from "./styles.ts";

const Menu = ({
  name,
  price,
  className = "",
  customStyle,
  ...props
}: MenuProps) => {
  return (
    <MenuContainer
      className={`menu ${className}`}
      customStyle={customStyle}
      {...props}
    >
      <div className="menu__name">{name}</div>
      <div className="menu__line"></div>
      <div className="menu__price">{`${price}원`}</div>
    </MenuContainer>
  );
};

export default Menu;
