import { Icons, Colors } from "@styles";
import { Button, Icon, Image, Tag } from "@atom/index.tsx";

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
      <section style={{ width: "35rem" }}>
        <Tag label={"태그"} />
        <Tag label={"태그"} variant={"active"} />
        <Tag label={"태그"} variant={"active"} icon={Icons.close} />
        <Tag label={"#해시태그"} variant={"hashtag"} />
      </section>
      <section style={{ width: "50rem" }}>
        <Image src={"https://placehold.co/200"} />
        <Image
          src={"https://placehold.co/300x200"}
          width={"30rem"}
          aspectRatio={"3 / 2"}
        />
        <Image
          src={"https://placehold.co/500x100"}
          width={"50rem"}
          aspectRatio={"5 / 1"}
        />
      </section>
    </>
  );
};

export default index;
