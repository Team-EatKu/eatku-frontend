import Button from "@atom/Button";
import Icon from "@atom/Icon";

import { Icons, Colors } from "@styles";

const index = () => {
  return (
    <>
      <section>
        <Icon icon={Icons.search} color={Colors.Black} />
      </section>
      <section style={{ width: "20rem" }}>
        <Button label={"버튼"} variant={"primary"} leftIcon={Icons.search} />
        <Button label={"버튼"} variant={"outline"} rightIcon={Icons.search} />
        <Button label={"버튼"} variant={"disabled"} rightIcon={Icons.search} />
        <Button label={"버튼"} size={"small"} rightIcon={Icons.search} />
        <Button label={"버튼"} size={"medium"} rightIcon={Icons.search} />
        <Button label={"버튼"} size={"large"} rightIcon={Icons.search} />
      </section>
    </>
  );
};

export default index;
