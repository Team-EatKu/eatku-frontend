import { Icons, Colors } from "@styles";
import {
  Button,
  Icon,
  Image,
  Input,
  Logo,
  Stars,
  Tag,
  Text,
} from "@atom/index.tsx";
import {
  FilterRow,
  Profile,
  Rating,
  SearchBar,
  TextView,
} from "@molecule/index.tsx";
import { SampleContainer } from "./styles.ts";

const index = () => {
  return (
    <SampleContainer>
      <div className="atom">
        <section>
          <Logo />
        </section>
        <section>
          <Icon icon={Icons.search} color={Colors.Black} />
        </section>
        <section style={{ width: "20rem" }}>
          <Button label={"버튼"} variant={"primary"} leftIcon={Icons.search} />
          <Button label={"버튼"} variant={"outline"} rightIcon={Icons.search} />
          <Button
            label={"버튼"}
            variant={"disabled"}
            rightIcon={Icons.search}
          />
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
        <section style={{ width: "30rem" }}>
          <Input />
        </section>
        <section style={{ width: "30rem" }}>
          <Stars rate={4} />
        </section>
        <section style={{ display: "flex" }}>
          <Text text={"텍스트입니다."} />
          <Text
            text={[
              "텍스트입니다1",
              "텍스트입니다2",
              "텍스트입니다3",
              "텍스트입니다4",
            ]}
          />
        </section>
      </div>
      <hr />
      <div className="molecule">
        <section style={{}}>
          <SearchBar placeholder={"공학관, 혼밥, 쌀국수"} />
        </section>
        <section style={{}}>
          <Rating current={"4.5"} />
        </section>
        <section style={{ width: "30rem" }}>
          <Profile src={"https://placehold.co/40"} name={"닉네임"} />
          <Profile
            src={"https://placehold.co/60"}
            name={"닉네임"}
            variant={"review"}
            rate={5}
          />
        </section>
        <section style={{}}>
          <FilterRow
            title={"위치"}
            tags={[
              { label: "정문", isActive: true },
              { label: "중문" },
              { label: "후문", isActive: true },
              { label: "쪽문" },
            ]}
          />
        </section>
        <section style={{}}>
          <TextView text={"매일 11:00 ~ 22:00"} icon={Icons.schedule} />
          <TextView
            text={[
              "물, 반찬, 국 셀프",
              "키오스크 주문",
              "사이즈업 가능(추가금액)",
              "Wi-Fi",
              "포장 가능",
            ]}
            icon={Icons.check}
          />
        </section>
      </div>
    </SampleContainer>
  );
};

export default index;
