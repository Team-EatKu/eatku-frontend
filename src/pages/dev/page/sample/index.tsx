import Button from "@atom/Button";
import Icon from "@atom/Icon";

import { Icons, Colors } from "@styles";
import Tag from "@atom/Tag";

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
      <section style={{ width: "30rem" }}>
        <Tag label={"태그"} />
        <Tag label={"태그"} variant={"active"} />
        <Tag label={"태그"} variant={"active"} icon={Icons.close} />
        <Tag label={"#해시태그"} variant={"hashtag"} />
      </section>
    </>
  );
};

export default index;
