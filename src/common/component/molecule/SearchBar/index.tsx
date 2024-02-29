import { SearchBarProps } from "@typings/common/molecule.ts";
import { SearchBarContainer } from "./styles.ts";
import { Icon, Input } from "@atom/index.tsx";
import { Colors, Icons } from "@styles";

const SearchBar = ({
  icon = Icons.search,
  width = "56.3rem",
  value,
  onChange = () => {},
  onClick = () => {},
  placeholder = "",
  className = "",
  customStyle,
  ...props
}: SearchBarProps) => {
  return (
    <SearchBarContainer
      width={width}
      className={`search-bar ${className}`}
      customStyle={customStyle}
    >
      <Input
        className={"login-bar__input"}
        fontSize={"1.8rem"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      <div className="icon-wrapper" onClick={onClick}>
        <Icon className={"login-bar__icon"} icon={icon} color={Colors.Silver} />
      </div>
    </SearchBarContainer>
  );
};

export default SearchBar;
